import React, {useState, useEffect} from "react";
import {Select, DatePicker, Card, Button} from "antd";
import AppSearch from "./app-search.component";
import {useDispatch, useSelector} from "react-redux";
import {getUsersApi} from "../util/api";
import {CrateIcon} from "../public/icons";
import {selectUser} from "../store/slices/user.slice";
import BaseSelect from "./base-app-select.component";
import moment from "moment";
import ExportExcel from "./export-excel.component";
import AppInput from "./app-input.component";

const {Option} = Select;
const {RangePicker} = DatePicker;

const Filter = ({startingRole}) => {
  const dispatch = useDispatch();
  const filter = 'filt';
  const userData = useSelector(selectUser);
  const [areaManagers, setAreaManagers] = useState([]);
  const [superAgents, setSuperAgents] = useState([]);
  const [agents, setAgents] = useState([]);
  const [disableDate, setDisableDate] = useState(false);
  const defaultQuery = {
    username: null,
    "super-agent": null,
    "area-manager": null,
    agent: null,
    ticketId: null,
    startDate: null,
    endDate: null,
    status: null,
    gameForm: null,
    selectionCountFrom: null,
    selectionCountTo: null,
    sort: null,
  };
  const [query, setQuery] = useState<any>(defaultQuery);
  const [localFilter, setLocalFilter] = useState<any>(filter);
  const search = async () => {
    let username;
    if (query.username) {
      username = query.username;
    } else if (query["super-agent"]) {
      username = query["super-agent"];
    } else if (query["area-manager"]) {
      username = query["area-manager"];
    }

    let q: any = {query: {}};
    if (username) {
      q.query.username = username;
    }

    if (query.ticketId && query.ticketId.length > 2) {
      q.query.ticketId = query.ticketId;
    }
    if (query.status) {
      q.query.status = query.status;
    }

    if (query.startDate && query.endDate) {
      q.query.startDate = query.startDate;
      q.query.endDate = query.endDate;
    }
    if (query.gameForm) {
      q.query.gameForm = query.gameForm;
    }

    if (query.selectionCountFrom) {
      q.query.selectionCountFrom = query.selectionCountFrom;
      q.query.selectionCountTo = query.selectionCountTo;
    }

    if (query.sort) {
      q.query.sort = query.sort;
    }

    // const wi = {...localFilter, query: {...localFilter.query, ...q.query}};
    // dispatch(setFilter(wi));

    // await dispatch(searchBets(wi));
  };

  const handleChange = (prop: any) => (event: any, dateString?: any) => {
    let value = "";
    if (typeof event === "string") {
      value = event;
    } else if (dateString) {
      value = dateString;
    } else if (dateString === "") {
      value = "";
    } else {
      value = event.target.value;
    }

    if (prop === "period") {
      // TODO: calculate range value, startDate and endDate. Then disable dateRange
      setDisableDate(value !== "MANUAL");
      switch (value) {
        case "TODAY":
          setQuery({
            ...query,
            startDate: moment().format("YYYY-MM-DD"),
            endDate: moment().format("YYYY-MM-DD"),
          });
          return;
        case "YESTERDAY":
          setQuery({
            ...query,
            startDate: moment().subtract(1, "days").format("YYYY-MM-DD"),
            endDate: moment().subtract(1, "days").format("YYYY-MM-DD"),
          });
          return;
        case "CURRENT_WEEK":
          setQuery({
            ...query,
            startDate: moment().day("Monday").format("YYYY-MM-DD"),
            endDate: moment().format("YYYY-MM-DD"),
          });
          return;
        case "LAST_WEEK":
          setQuery({
            ...query,
            startDate: moment()
              .subtract(1, "week")
              .startOf("week")
              .add(1, "days")
              .format("YYYY-MM-DD"),
            endDate: moment()
              .subtract(1, "week")
              .endOf("week")
              .add(1, "days")
              .format("YYYY-MM-DD"),
          });
          return;
        case "CURRENT_MONTH":
          setQuery({
            ...query,
            startDate: moment().startOf("month").format("YYYY-MM-DD"),
            endDate: moment().format("YYYY-MM-DD"),
          });
          return;
        case "LAST_MONTH":
          setQuery({
            ...query,
            startDate: moment()
              .subtract(1, "months")
              .startOf("month")
              .format("YYYY-MM-DD"),
            endDate: moment()
              .subtract(1, "months")
              .endOf("month")
              .format("YYYY-MM-DD"),
          });
          return;
        default:
          setQuery({
            ...query,
            startDate: null,
            endDate: null,
          });
          return;
      }
    } else if (prop === "date" && value) {
      setQuery({
        ...query,
        startDate: value[0],
        endDate: value[1],
      });
      return;
    } else if (prop === "reset") {
      setLocalFilter({
        query: {aggregate: "true"},
      });
      // dispatch(searchBets(localFilter));
      return;
    }

    setQuery({
      ...query,
      [prop]: value,
    });
  };

  // Get bet heirarchy
  const fetchUser = (prop: any) => (value: any) => {
    if (!value) {
      return;
    }
    let q;
    if (prop === "username") {
      q = {query: {username: value}};
    } else {
      q = {query: {parent: value}};
    }

    setQuery({
      ...query,
      [prop]: value,
    });

    getUsersApi(q).then((responseData: any) => {
      if (prop === "area-manager") {
        setQuery({
          ...query,
          "super-agent": null,
          [prop]: value,
        });
        setSuperAgents(responseData?.data || []);
      } else if (prop === "super-agent") {
        setAgents(responseData?.data || []);
        setQuery({
          ...query,
          agent: null,
          [prop]: value,
        });
      } else if (prop === "agent") {
        setAgents(responseData?.data || []);
      }
    });
  };

  const getUsers1 = async (payload) => {
    const responseData = await getUsersApi(payload);
    setAreaManagers(responseData?.data || []);
  };

  const searchBetsData = [
    {
      firstName: "firstName",
      lastName: "lastName",
      username: "username",
      email: "email",
      user: "firstName",
    },
    {
      firstName: "firstName",
      lastName: "lastName",
      username: "username",
      email: "email",
      user: "firstName",
    },
    {
      firstName: "firstName",
      lastName: "lastName",
      username: "username",
      email: "email",
      user: "firstName",
    },
  ]

  useEffect(() => {
    // dispatch(searchBets(filter));
    getUsers1({
      query: {role: startingRole},
    });

  }, []);

  return (
    <div className="">
      <Card bordered={true} className="w-full mb-4 rounded-lg bg-lightPrimary">
        <div className="flex flex-col flex-wrap justify-between md:flex-row">
          <div className="flex items-center my-4 md:w-2/5 lg:w-1/5">
            <label className="mr-2"> ID </label>

            <AppSearch
              className="flex-1"
              placeholder="Search by ticket ID"
              onChange={handleChange("ticketId")}
              name="ticketId"
              value={query.ticketId}
              // onChange={searchTicketId}
            />
          </div>

          <div className="flex items-center my-4 md:w-2/5 lg:w-1/5">
            <label className="w-1/3 mr-4 whitespace-no-wrap ">Sort By</label>
            <BaseSelect
              suffixIcon={<CrateIcon />}
              showSearch
              className="w-full"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              defaultValue="DATE"
              name="sort"
              onChange={handleChange("sort")}
              value={query.sort}
            >
              <Option value="DATE">Date</Option>
              <Option value="STAKE">Stake</Option>
              <Option value="TOTAL_WINNING">Pot Payout</Option>
              <Option value="CONFIRMED_WINNING">Conf Winning</Option>
            </BaseSelect>
          </div>

          <div className="flex items-center my-4 md:w-2/5 lg:w-1/5">
            <label className="mr-2"> Period </label>
            <BaseSelect
              className="w-full"
              suffixIcon={<CrateIcon />}
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              // name="period"
              defaultValue="MANUAL"
              onChange={handleChange("period")}
              // value={query.period}
            >
              <Option value="MANUAL">Manual</Option>
              <Option value="TODAY">Today</Option>
              <Option value="CURRENT_WEEK">Current Week</Option>
              <Option value="YESTERDAY">Yesterday</Option>
              <Option value="LAST_WEEK">Last Week</Option>
              <Option value="CURRENT_MONTH">Current Month</Option>
              <Option value="LAST_MONTH">Last Month</Option>
            </BaseSelect>
          </div>

          <div className="flex items-center justify-between my-4 md:w-2/5 lg:w-1/5">
            <RangePicker
              name="range"
              className="w-full"
              onChange={handleChange("date")}
              picker="date"
              disabled={disableDate}
            />
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-between md:flex-row">
          {(userData.data.role === "tenant" ||
            userData.data.role === "staff") && (
            <div className="flex items-center my-4 md:w-2/5 lg:w-1/5">
              <label className="mr-2"> Area</label>
              <BaseSelect
                className="w-full"
                suffixIcon={<CrateIcon />}
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                value={query["area-manager"]}
                // onChange={fetchUser("super-agent")}

                onChange={fetchUser("area-manager")}
              >
                {areaManagers?.length > 0
                  ? areaManagers.map((user, index) => {
                      return (
                        <Option key={index} value={userData.data.username}>
                          {userData.data.username}
                        </Option>
                      );
                    })
                  : null}
                {/* <Option value="good">kkgkkdkd</Option> */}
              </BaseSelect>
            </div>
          )}
          {(userData.data.role === "tenant" ||
            userData.data.role === "staff" ||
            userData.data.role === "area-manager") && (
            <div className="flex items-center my-4 md:w-2/5 lg:w-1/5">
              <label className="mr-2"> Super </label>
              <BaseSelect
                className="w-full"
                suffixIcon={<CrateIcon />}
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                // onSelect={fetchUser("agent")}
                defaultValue=""
                name="super-agent"
                disabled={superAgents.length === 0}
                onChange={fetchUser("super-agent")}
                value={query["super-agent"]}
              >
                {superAgents?.length > 0
                  ? superAgents.map((user, index) => {
                      return (
                        <Option key={index} value={userData.data.username}>
                          {userData.data.username}
                        </Option>
                      );
                    })
                  : null}
              </BaseSelect>
            </div>
          )}

          {(userData.data.role === "tenant" ||
            userData.data.role === "staff" ||
            userData.data.role === "area-manager" ||
            userData.data.role === "super-agent") && (
            <div className="flex items-center my-4 md:w-2/5 lg:w-1/5">
              <label className="mr-2"> Agent </label>
              <BaseSelect
                className="w-full"
                suffixIcon={<CrateIcon />}
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                defaultValue=""
                name="agent"
                disabled={agents.length === 0}
                onChange={fetchUser("agent")}
                value={query.agent}

                // onSelect={betHierarchy}
              >
                {agents?.length > 0
                  ? agents.map((user, index) => {
                      return (
                        <Option key={index} value={userData.data.username}>
                          {userData.data.username}
                        </Option>
                      );
                    })
                  : null}
              </BaseSelect>
            </div>
          )}

          <div className="flex items-center justify-between my-4 md:w-2/5 lg:w-1/5">
            <label className="mr-2"> Events </label>
            <AppInput
              placeholder="1"
              className="w-16"
              name="eventCountFrom"
              onChange={handleChange("eventCountFrom")}
              value={query.selectionCountFrom}
            />
            <span className="mx-2">to</span>
            <AppInput
              placeholder="1"
              className="w-16"
              name="eventCountTo"
              onChange={handleChange("eventCountTo")}
              value={query.selectionCountTo}
            />
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-between md:flex-row">
          <div className="flex items-center my-4 md:w-2/5 lg:w-1/5">
            <AppSearch
              className="w-full"
              placeholder="Search by username"
              onChange={handleChange("username")}
              value={query["username"]}
            />
          </div>

          <div className="flex items-center my-4 md:w-2/5 lg:w-1/5">
            <label className="mr-2"> Status </label>
            <BaseSelect
              className="w-full"
              suffixIcon={<CrateIcon />}
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              defaultValue="ALL"
              onChange={handleChange("status")}
              value={query.status}
              name="status"
            >
              <Option value="">ALL</Option>
              <Option value="WON">WON</Option>
              <Option value="RUNNING">RUNNING</Option>
              <Option value="LOST">LOST</Option>
              <Option value="PARTIAL_WON">PARTIAL WON</Option>
              <Option value="CANCELLED">CANCELLED</Option>
              <Option value="PAID">PAID</Option>
            </BaseSelect>
          </div>

          <div className="flex items-center my-4 md:w-2/5 lg:w-1/5">
            <label className="mr-2"> Type </label>
            <BaseSelect
              className="w-full"
              suffixIcon={<CrateIcon />}
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              defaultValue="ALL"
              name="gameForm"
              onChange={handleChange("gameForm")}
              value={query.gameForm}
            >
              <Option value={null}>ALL</Option>
              <Option value="NAP">NAP</Option>
              <Option value="PERM"> PERM </Option>
            </BaseSelect>
          </div>

          <div className="flex flex-col md:flex-row md:w-2/5 lg:w-1/5">
            <ExportExcel
              csvData={{
                records: searchBetsData,
                fileName: "Bet List",
                source: "BETLIST",
                // disabled: searchBetsData?.loading === "LOADING",
              }}
            />
            <Button
              key="cancel"
              block={true}
              onClick={handleChange("reset")}
              className="w-full h-8 my-2 btn-secondary"
              // loading={loading}
              // disabled={searchBetsData?.loading === "LOADING"}
            >
              CLEAR
            </Button>
            <Button
              key="submit"
              block={true}
              onClick={search}
              className="w-full h-8 my-2 md:ml-2 btn-success"
              // loading={searchBetsData?.loading === "LOADING"}
              // disabled={searchBetsData?.loading === "LOADING"}
            >
              SEARCH
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Filter;
