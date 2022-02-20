import {Icon} from "@ant-design/compatible";

const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);

export const HeartIcon = (props) => <Icon component={HeartSvg} {...props} />;
const BankerSvg = () => (
  <svg
    id="Capa_1"
    enable-background="new 0 0 512.047 512.047"
    height="1rem"
    viewBox="0 0 512.047 512.047"
    width="1rem"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="B">
      <path d="m334.568 507.618c83.832-9.523 131.455-77.588 131.455-150.791 0-52.632-25.84-95.229-70.518-118.681 29.941-24.111 47.651-61.656 47.651-102.174 0-64.556-46.699-119.575-111.05-130.854-45.293-7.877-113.853-4.022-286.083-5.071v511.941c40.109.208 248.486.099 288.545-4.37zm-164.531-397.573c14.517.109 100.222-.508 117.466 1.523 22.998 2.886 34.189 15.366 34.189 38.159 0 28.989-20.977 37.632-38.628 39.785-16.663 2.083-86.313 1.393-113.027 1.523zm0 191.719c26.149.741 115.186-2.538 139.204 5.991 19.644 7.046 29.604 22.002 29.604 44.487 0 24.902-12.466 40.942-35.083 45.176l-.41.088c-18.359 3.934-99.933 2.182-133.315 2.607z" />
    </g>
  </svg>
);

export const BankerIcon = (props) => <Icon component={BankerSvg} {...props} />;

const MessageSvg = () => (
  <svg
    width="24"
    height="20"
    viewBox="0 0 24 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.6667 2.99999C23.6667 1.71666 22.6167 0.666656 21.3333 0.666656H2.66666C1.38333 0.666656 0.333328 1.71666 0.333328 2.99999V17C0.333328 18.2833 1.38333 19.3333 2.66666 19.3333H21.3333C22.6167 19.3333 23.6667 18.2833 23.6667 17V2.99999ZM21.3333 2.99999L12 8.83332L2.66666 2.99999H21.3333ZM12 11.1667L2.66666 5.33332V17H21.3333V5.33332L12 11.1667Z"
      fill="#410988"
    />
  </svg>
);

export const MessageIcon = (props) => (
  <Icon component={MessageSvg} {...props} />
);

const MessageWhiteSvg = () => (
  <svg
    width="24"
    height="20"
    viewBox="0 0 24 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.6667 2.99999C23.6667 1.71666 22.6167 0.666656 21.3333 0.666656H2.66666C1.38333 0.666656 0.333328 1.71666 0.333328 2.99999V17C0.333328 18.2833 1.38333 19.3333 2.66666 19.3333H21.3333C22.6167 19.3333 23.6667 18.2833 23.6667 17V2.99999ZM21.3333 2.99999L12 8.83332L2.66666 2.99999H21.3333ZM12 11.1667L2.66666 5.33332V17H21.3333V5.33332L12 11.1667Z"
      fill="#fff"
    />
  </svg>
);

export const MessageWhiteIcon = (props) => (
  <Icon component={MessageWhiteSvg} {...props} />
);

const WalletSvg = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.4075 0.214485C33.8414 -0.480918 36.3782 0.928421 37.0736 3.36233C37.1906 3.77181 37.25 4.1956 37.25 4.62147L37.25 8.45834H41.8333C44.3646 8.45834 46.4167 10.5104 46.4167 13.0417V40.5417C46.4167 43.073 44.3646 45.125 41.8333 45.125H5.16666C2.63536 45.125 0.583328 43.073 0.583328 40.5417H0.644525C0.603843 40.2952 0.583328 40.0456 0.583328 39.7952V12.4786C0.583328 10.4322 1.93989 8.63381 3.90752 8.07163L31.4075 0.214485ZM19.2376 40.5417H41.8333V22.2083H37.25L37.25 31.9381C37.25 33.9844 35.8934 35.7829 33.9258 36.3451L19.2376 40.5417ZM41.8333 13.0417V17.625H37.25V13.0417H41.8333ZM5.16666 12.4786V39.7951L32.6667 31.938V4.62141L5.16666 12.4786ZM28.0833 17.625C28.0833 18.8907 27.0573 19.9167 25.7917 19.9167C24.526 19.9167 23.5 18.8907 23.5 17.625C23.5 16.3594 24.526 15.3333 25.7917 15.3333C27.0573 15.3333 28.0833 16.3594 28.0833 17.625Z"
      fill="#50A775"
    />
  </svg>
);

export const WalletIcon = (props) => <Icon component={WalletSvg} {...props} />;

const RequestSvg = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.04166 0.291672H27.9583C30.4792 0.291672 32.5417 2.35417 32.5417 4.875V46.125C32.5417 48.6458 30.4792 50.7083 27.9583 50.7083H5.04166C2.52083 50.7083 0.458328 48.6458 0.458328 46.125V4.875C0.458328 2.35417 2.52083 0.291672 5.04166 0.291672ZM27.9583 41.5417V9.45833H5.04165V41.5417H27.9583ZM16.5 13.4C12.0083 13.4 8.47915 16.8833 8.47915 21.3521H12.4896C12.4896 19.2208 14.3687 17.3417 16.5 17.3417C18.6312 17.3417 20.5104 19.2208 20.5104 21.3521C20.5104 23.1088 19.3539 24.0169 18.0541 25.0375C16.3866 26.3467 14.4833 27.8411 14.4833 31.55H18.5167C18.5167 29.3841 19.9127 28.14 21.3585 26.8517C22.911 25.4683 24.5208 24.0338 24.5208 21.3521C24.5208 16.8604 20.9916 13.4 16.5 13.4ZM18.7917 34.6667H14.2083V39.25H18.7917V34.6667Z"
      fill="#FFC107"
    />
  </svg>
);

export const RequestIcon = (props) => (
  <Icon component={RequestSvg} {...props} />
);

const AgentCountSvg = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.2083 41.8333V5.16666C21.2083 2.63536 19.1563 0.583328 16.625 0.583328H5.16667C2.63536 0.583328 0.583336 2.63536 0.583336 5.16666V41.8333C0.583336 44.3646 2.63536 46.4167 5.16667 46.4167H16.625C19.1563 46.4167 21.2083 44.3646 21.2083 41.8333ZM5.16667 5.16666H16.625V41.8333H5.16667V5.16666ZM46.4167 5.16666V32.6667C46.4167 35.198 44.3646 37.25 41.8333 37.25H30.375C27.8437 37.25 25.7917 35.198 25.7917 32.6667V5.16666C25.7917 2.63536 27.8437 0.583328 30.375 0.583328H41.8333C44.3646 0.583328 46.4167 2.63536 46.4167 5.16666ZM30.375 5.16666H41.8333V32.6667H30.375V5.16666Z"
      fill="#41098B"
    />
  </svg>
);

export const AgentCountIcon = (props) => (
  <Icon component={AgentCountSvg} {...props} />
);

const AgentPendingSvg = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32.9583 30.6667L23.7917 21.5V14.2125C26.45 13.25 28.375 10.7292 28.375 7.75C28.375 3.94583 25.3042 0.875 21.5 0.875C17.6958 0.875 14.625 3.94583 14.625 7.75C14.625 10.7292 16.55 13.25 19.2083 14.2125V21.5L10.0417 30.6667H0.875V42.125H12.3333V35.1354L21.5 25.5104L30.6667 35.1354V42.125H42.125V30.6667H32.9583Z"
      fill="#41098B"
    />
  </svg>
);

export const AgentPendingIcon = (props) => (
  <Icon component={AgentPendingSvg} {...props} />
);

const RevenueSvg = () => (
  <svg
    width="47"
    height="49"
    viewBox="0 0 47 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M42.25 0.583344H4.74998C2.44879 0.583344 0.583313 2.63537 0.583313 5.16668V41.8333C0.583313 44.3647 2.44879 46.4167 4.74998 46.4167H7.45831V48.7083H12.0416V46.4167H34.9583V48.7083H39.5416V46.4167H42.25C44.5512 46.4167 46.4166 44.3647 46.4166 41.8333V5.16668C46.4166 2.63537 44.5512 0.583344 42.25 0.583344ZM5.16665 41.8333V5.16668H41.8333V9.75001H39.5416V14.3333H41.8333V32.6667H39.5416V37.25H41.8333V41.8333H5.16665ZM36.5788 33.3379L33.3379 36.5788L28.1566 31.3975C26.7919 32.2039 25.2 32.6667 23.5 32.6667C21.8 32.6667 20.2081 32.2039 18.8434 31.3975L13.6621 36.5788L10.4212 33.3379L15.6025 28.1566C14.7961 26.7919 14.3333 25.2 14.3333 23.5C14.3333 21.8 14.7961 20.2081 15.6025 18.8434L10.4212 13.6621L13.6621 10.4212L18.8434 15.6025C20.2081 14.7961 21.8 14.3333 23.5 14.3333C25.2 14.3333 26.7919 14.7961 28.1566 15.6025L33.3379 10.4212L36.5788 13.6621L31.3975 18.8434C32.2039 20.2081 32.6666 21.8 32.6666 23.5C32.6666 25.2 32.2039 26.7919 31.3975 28.1566L36.5788 33.3379ZM28.0833 23.5C28.0833 26.0313 26.0313 28.0833 23.5 28.0833C20.9687 28.0833 18.9166 26.0313 18.9166 23.5C18.9166 20.9687 20.9687 18.9167 23.5 18.9167C26.0313 18.9167 28.0833 20.9687 28.0833 23.5Z"
      fill="#FE8B00"
    />
  </svg>
);

export const RevenueIcon = (props) => (
  <Icon component={RevenueSvg} {...props} />
);

const GgrSvg = () => (
  <svg
    width="51"
    height="40"
    viewBox="0 0 51 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.45835 0.875H46.5417C48.8429 0.875 50.7084 2.92703 50.7084 5.45833V21.5H46.125V16.9167H4.87502V32.9583H25.5V37.5417H4.45835C2.15717 37.5417 0.291687 35.4896 0.291687 32.9583V5.45833C0.291687 2.92703 2.15717 0.875 4.45835 0.875ZM46.125 5.45833V12.3333H4.87502V5.45833H46.125ZM30.0834 32.9583H40.5924L37.6296 35.9212L40.8705 39.1621L49.3659 30.6667L40.8705 22.1712L37.6296 25.4121L40.5924 28.375H30.0834V32.9583Z"
      fill="#50A775"
    />
  </svg>
);

export const GgrIcon = (props) => <Icon component={GgrSvg} {...props} />;

const PlusSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM13 13H17V11H13V7H11V11H7V13H11V17H13V13Z"
      fill="#50A775"
    />
  </svg>
);

export const PlusIcon = (props) => <Icon component={PlusSvg} {...props} />;

const TransferSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
      fill="#FE8B00"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.2425 10.5V12.75L7.25 9.75L10.2425 6.75V9H15.5V10.5H10.2425ZM8.5 14.5H13.7575V12.25L16.75 15.25L13.7575 18.25V16H8.5V14.5Z"
      fill="white"
    />
  </svg>
);

export const TransferIcon = (props) => (
  <Icon component={TransferSvg} {...props} />
);

const RequestMiniSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
      fill="#FFC107"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.08334 5.58333H14.9167C15.5583 5.58333 16.0833 6.10833 16.0833 6.74999V17.25C16.0833 17.8917 15.5583 18.4167 14.9167 18.4167H9.08334C8.44167 18.4167 7.91667 17.8917 7.91667 17.25V6.74999C7.91667 6.10833 8.44167 5.58333 9.08334 5.58333ZM14.9167 16.0833V7.91666H9.08334V16.0833H14.9167ZM12 8.91999C10.8567 8.91999 9.95834 9.80666 9.95834 10.9442H10.9792C10.9792 10.4017 11.4575 9.92333 12 9.92333C12.5425 9.92333 13.0208 10.4017 13.0208 10.9442C13.0208 11.3913 12.7265 11.6225 12.3956 11.8823C11.9711 12.2155 11.4867 12.5959 11.4867 13.54H12.5133C12.5133 12.9887 12.8687 12.672 13.2367 12.3441C13.6319 11.9919 14.0417 11.6268 14.0417 10.9442C14.0417 9.80083 13.1433 8.91999 12 8.91999ZM12.5833 14.3333H11.4167V15.5H12.5833V14.3333Z"
      fill="white"
    />
  </svg>
);

export const RequestMiniIcon = (props) => (
  <Icon component={RequestMiniSvg} {...props} />
);

const ThumpSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
      fill="#DC3545"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.25 9.24999H13.5692L14.1233 6.58416L14.1408 6.39749C14.1408 6.15832 14.0417 5.93666 13.8842 5.77916L13.2658 5.16666L9.42749 9.01082C9.21166 9.22082 9.08333 9.51249 9.08333 9.83332V15.6667C9.08333 16.3083 9.60833 16.8333 10.25 16.8333H15.5C15.9842 16.8333 16.3983 16.5417 16.5733 16.1217L18.335 12.0092C18.3875 11.875 18.4167 11.735 18.4167 11.5833V10.4167C18.4167 9.77499 17.8917 9.24999 17.25 9.24999ZM17.25 11.5833L15.5 15.6667H10.25V9.83332L12.7817 7.30166L12.1342 10.4167H17.25V11.5833ZM7.91666 9.83332H5.58333V16.8333H7.91666V9.83332Z"
      fill="white"
    />
  </svg>
);

export const ThumpIcon = (props) => <Icon component={ThumpSvg} {...props} />;

const HomeSvg = () => (
  <svg
    width="26"
    height="22"
    viewBox="0 0 26 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.25 11.625H0.5L13 0.375L25.5 11.625H21.75V21.625H14.25V14.125H11.75V21.625H4.25V11.625ZM19.25 9.3625L13 3.7375L6.75 9.3625V19.125H9.25V11.625H16.75V19.125H19.25V9.3625Z"
      fill="#E3E3E3"
    />
  </svg>
);

export const HomeIcon = (props) => <Icon component={HomeSvg} {...props} />;

const TransactionSvg = () => (
  <svg
    width="20"
    height="24"
    viewBox="0 0 20 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 5.125C0 0.75 4.475 0.125 10 0.125C15.525 0.125 20 0.75 20 5.125V17.625C20 18.725 19.5125 19.7125 18.75 20.4V22.625C18.75 23.3125 18.1875 23.875 17.5 23.875H16.25C15.5625 23.875 15 23.3125 15 22.625V21.375H5V22.625C5 23.3125 4.4375 23.875 3.75 23.875H2.5C1.8125 23.875 1.25 23.3125 1.25 22.625V20.4C0.4875 19.7125 0 18.725 0 17.625V5.125ZM10 2.625C5.3875 2.625 3.6125 3.2 2.925 3.8625H17.075C16.3875 3.2 14.6125 2.625 10 2.625ZM17.5 6.3625V10.125H2.5V6.3625H17.5ZM16.7125 18.875L17.075 18.5375C17.2375 18.4 17.5 18.0875 17.5 17.625V12.625H2.5V17.625C2.5 18.0875 2.7625 18.4 2.925 18.5375L3.2875 18.875H16.7125ZM5.625 13.875C4.58946 13.875 3.75 14.7145 3.75 15.75C3.75 16.7855 4.58946 17.625 5.625 17.625C6.66053 17.625 7.5 16.7855 7.5 15.75C7.5 14.7145 6.66053 13.875 5.625 13.875ZM12.5 15.75C12.5 14.7145 13.3395 13.875 14.375 13.875C15.4105 13.875 16.25 14.7145 16.25 15.75C16.25 16.7855 15.4105 17.625 14.375 17.625C13.3395 17.625 12.5 16.7855 12.5 15.75Z"
      fill="#E3E3E3"
    />
  </svg>
);

export const TransactionIcon = (props) => (
  <Icon component={TransactionSvg} {...props} />
);

const FundSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.625 3.25V6.1C23.3625 6.5375 23.875 7.325 23.875 8.25V15.75C23.875 16.675 23.3625 17.4625 22.625 17.9V20.75C22.625 22.125 21.5 23.25 20.125 23.25H2.625C1.2375 23.25 0.125 22.125 0.125 20.75V3.25C0.125 1.875 1.2375 0.75 2.625 0.75H20.125C21.5 0.75 22.625 1.875 22.625 3.25ZM12.625 15.75H21.375V8.25H12.625V15.75ZM2.625 20.75V3.25H20.125V5.75H12.625C11.25 5.75 10.125 6.875 10.125 8.25V15.75C10.125 17.125 11.25 18.25 12.625 18.25H20.125V20.75H2.625ZM14.5 12C14.5 10.9645 15.3395 10.125 16.375 10.125C17.4105 10.125 18.25 10.9645 18.25 12C18.25 13.0355 17.4105 13.875 16.375 13.875C15.3395 13.875 14.5 13.0355 14.5 12Z"
      fill="#E3E3E3"
    />
  </svg>
);

export const FundIcon = (props) => <Icon component={FundSvg} {...props} />;

const LogSvg = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 25C2.5 26.3807 3.61929 27.5 5 27.5H21.7678L27.5 21.7678V5C27.5 3.61929 26.3807 2.5 25 2.5H5C3.61929 2.5 2.5 3.61929 2.5 5V25ZM5 5H25V18.75H21.25C19.8693 18.75 18.75 19.8693 18.75 21.25V25H5V5ZM21.25 21.25H24.4822L21.25 24.4822V21.25ZM8.75 18.75V21.25H16.25V18.75H8.75ZM8.75 16.25V13.75H21.25V16.25H8.75ZM8.75 8.75V11.25H21.25V8.75H8.75Z"
      fill="#E3E3E3"
    />
  </svg>
);

export const LogIcon = (props) => <Icon component={LogSvg} {...props} />;

const HomeWhiteSvg = () => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 9.5H0L10 0.5L20 9.5H17V17.5H11V11.5H9V17.5H3V9.5ZM15 7.69L10 3.19L5 7.69V15.5H7V9.5H13V15.5H15V7.69Z"
      fill="#E3E3E3"
    />
  </svg>
);

export const HomeWhiteIcon = (props) => (
  <Icon component={HomeWhiteSvg} {...props} />
);

const AgentUsersWhiteSvg = () => (
  <svg
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 8C16.21 8 18 6.21 18 4C18 1.79 16.21 0 14 0C11.79 0 10 1.79 10 4C10 6.21 11.79 8 14 8ZM14 2C15.1 2 16 2.9 16 4C16 5.1 15.1 6 14 6C12.9 6 12 5.1 12 4C12 2.9 12.9 2 14 2ZM6 14C6 11.34 11.33 10 14 10C16.67 10 22 11.34 22 14V16H6V14ZM8 14C8.22 13.28 11.31 12 14 12C16.7 12 19.8 13.29 20 14H8ZM5 8V11H3V8H0V6H3V3H5V6H8V8H5Z"
      fill="#E3E3E3"
    />
  </svg>
);

export const AgentUsersWhiteIcon = (props) => (
  <Icon component={AgentUsersWhiteSvg} {...props} />
);

const StaffWhiteSvg = () => (
  <svg
    width="20"
    height="14"
    viewBox="0 0 20 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 7C8.93 7 10.5 5.43 10.5 3.5C10.5 1.57 8.93 0 7 0C5.07 0 3.5 1.57 3.5 3.5C3.5 5.43 5.07 7 7 7ZM7 2C7.83 2 8.5 2.67 8.5 3.5C8.5 4.33 7.83 5 7 5C6.17 5 5.5 4.33 5.5 3.5C5.5 2.67 6.17 2 7 2ZM2.77 12H7.05C7.02 12.16 7 12.33 7 12.5V14H0V12.5C0 10.17 4.66 9 7 9C7.56 9 8.25 9.07 8.98 9.2C8.27 9.68 7.68 10.28 7.34 11.01C7.28502 11.01 7.22755 11.0075 7.17007 11.005L7.17 11.005L7.16993 11.005C7.11245 11.0025 7.05498 11 7 11C5.47 11 3.76 11.5 2.77 12ZM14.5 9.5C12.66 9.5 9 10.51 9 12.5V14H20V12.5C20 10.51 16.34 9.5 14.5 9.5ZM17 5.5C17 6.44 16.47 7.25 15.71 7.68C15.35 7.88 14.94 8 14.5 8C14.06 8 13.65 7.88 13.29 7.68C12.53 7.25 12 6.44 12 5.5C12 4.12 13.12 3 14.5 3C15.88 3 17 4.12 17 5.5Z"
      fill="#E3E3E3"
    />
  </svg>
);

export const StaffWhiteIcon = (props) => (
  <Icon component={StaffWhiteSvg} {...props} />
);

const WalletWhiteSvg = () => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.5 2V4.28C19.09 4.63 19.5 5.26 19.5 6V12C19.5 12.74 19.09 13.37 18.5 13.72V16C18.5 17.1 17.6 18 16.5 18H2.5C1.39 18 0.5 17.1 0.5 16V2C0.5 0.9 1.39 0 2.5 0H16.5C17.6 0 18.5 0.9 18.5 2ZM10.5 12H17.5V6H10.5V12ZM2.5 16V2H16.5V4H10.5C9.4 4 8.5 4.9 8.5 6V12C8.5 13.1 9.4 14 10.5 14H16.5V16H2.5ZM12 9C12 8.17157 12.6716 7.5 13.5 7.5C14.3284 7.5 15 8.17157 15 9C15 9.82843 14.3284 10.5 13.5 10.5C12.6716 10.5 12 9.82843 12 9Z"
      fill="#E3E3E3"
    />
  </svg>
);

export const WalletWhiteIcon = (props) => (
  <Icon component={WalletWhiteSvg} {...props} />
);

const BankWhiteSvg = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.5 5L10 0L19.5 5V7H0.5V5ZM10 2.26L15.21 5H4.79L10 2.26ZM3 9H5V16H3V9ZM11 9V16H9V9H11ZM0.5 18V20H19.5V18H0.5ZM15 9H17V16H15V9Z"
      fill="#E3E3E3"
    />
  </svg>
);

export const BankWhiteIcon = (props) => (
  <Icon component={BankWhiteSvg} {...props} />
);

const ReportWhiteSvg = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.1 0H0.9C0.4 0 0 0.4 0 0.9V17.1C0 17.5 0.4 18 0.9 18H17.1C17.5 18 18 17.5 18 17.1V0.9C18 0.4 17.5 0 17.1 0ZM6 4H4V6H6V4ZM14 4H8V6H14V4ZM14 8H8V10H14V8ZM8 12H14V14H8V12ZM4 8H6V10H4V8ZM6 12H4V14H6V12ZM2 16H16V2H2V16Z"
      fill="#E3E3E3"
    />
  </svg>
);

export const ReportWhiteIcon = (props) => (
  <Icon component={ReportWhiteSvg} {...props} />
);

const GearAdminWhiteSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 8.68994V3.99994H15.31L12 0.689941L8.69 3.99994H4V8.68994L0.690002 11.9999L4 15.3099V19.9999H8.69L12 23.3099L15.31 19.9999H20V15.3099L23.31 11.9999L20 8.68994ZM7.8 15.9999L11 6.99994H13L16.2 15.9999H14.3L13.6 13.9999H10.4L9.7 15.9999H7.8ZM12 8.99994L10.85 12.6499H13.15L12 8.99994ZM18 17.9999V14.4799L20.48 11.9999L18 9.51994V5.99994H14.48L12 3.51994L9.52 5.99994H6V9.51994L3.52 11.9999L6 14.4799V17.9999H9.52L12 20.4799L14.48 17.9999H18Z"
      fill="#E3E3E3"
    />
  </svg>
);

export const GearAdminWhiteIcon = (props) => (
  <Icon component={GearAdminWhiteSvg} {...props} />
);

const GearSettingWhiteSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 3.99994V8.68994L23.31 11.9999L20 15.3099V19.9999H15.31L12 23.3099L8.69 19.9999H4V15.3099L0.690002 11.9999L4 8.68994V3.99994H8.69L12 0.689941L15.31 3.99994H20ZM18 17.9999V14.4799L20.48 11.9999L18 9.51994V5.99994H14.48L12 3.51994L9.52 5.99994H6V9.51994L3.52 11.9999L6 14.4799V17.9999H9.52L12 20.4799L14.48 17.9999H18ZM12 6.49994C8.97 6.49994 6.5 8.96994 6.5 11.9999C6.5 15.0299 8.97 17.4999 12 17.4999C15.03 17.4999 17.5 15.0299 17.5 11.9999C17.5 8.96994 15.03 6.49994 12 6.49994ZM8.5 11.9999C8.5 13.9299 10.07 15.4999 12 15.4999C13.93 15.4999 15.5 13.9299 15.5 11.9999C15.5 10.0699 13.93 8.49994 12 8.49994C10.07 8.49994 8.5 10.0699 8.5 11.9999Z"
      fill="#E3E3E3"
    />
  </svg>
);

export const GearSettingWhiteIcon = (props) => (
  <Icon component={GearSettingWhiteSvg} {...props} />
);

const UserSvg = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 29.8077C6.82192 29.8077 0.192291 23.178 0.192291 15C0.192291 6.82193 6.82192 0.192291 15 0.192291C23.1781 0.192291 29.8076 6.82193 29.8076 15C29.8076 23.178 23.1781 29.8077 15 29.8077ZM24.9608 21.8985C26.3193 19.9408 27.1154 17.5634 27.1154 15C27.1154 8.30884 21.6911 2.8846 15 2.8846C8.30885 2.8846 2.8846 8.30884 2.8846 15C2.8846 17.5634 3.68069 19.9408 5.03912 21.8985C6.55416 19.8974 10.1143 19.0385 15 19.0385C19.8857 19.0385 23.4458 19.8974 24.9608 21.8985ZM23.0294 24.0727C22.6353 22.656 19.805 21.7307 15 21.7307C10.195 21.7307 7.36461 22.656 6.9706 24.0727C9.10828 25.966 11.9199 27.1154 15 27.1154C18.0801 27.1154 20.8916 25.966 23.0294 24.0727ZM15 6.92306C11.7411 6.92306 9.61537 9.28659 9.61537 12.3077C9.61537 16.9215 11.9858 19.0385 15 19.0385C17.9859 19.0385 20.3846 16.9918 20.3846 12.5769C20.3846 9.5098 18.2499 6.92306 15 6.92306ZM12.3077 12.3077C12.3077 15.3624 13.4091 16.3462 15 16.3462C16.5854 16.3462 17.6923 15.4017 17.6923 12.5769C17.6923 10.8948 16.6365 9.61537 15 9.61537C13.2954 9.61537 12.3077 10.7136 12.3077 12.3077Z"
      fill="#41098B"
    />
  </svg>
);

export const UserIcon = (props) => <Icon component={UserSvg} {...props} />;

const UserWhiteSvg = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 25.8333C5.91237 25.8333 0.166687 20.0876 0.166687 13C0.166687 5.91234 5.91237 0.166656 13 0.166656C20.0877 0.166656 25.8334 5.91234 25.8334 13C25.8334 20.0876 20.0877 25.8333 13 25.8333ZM21.6328 18.9787C22.8101 17.282 23.5 15.2216 23.5 13C23.5 7.201 18.799 2.49999 13 2.49999C7.20103 2.49999 2.50002 7.201 2.50002 13C2.50002 15.2216 3.18997 17.282 4.36727 18.9787C5.6803 17.2444 8.76572 16.5 13 16.5C17.2343 16.5 20.3197 17.2444 21.6328 18.9787ZM19.9588 20.863C19.6173 19.6352 17.1643 18.8333 13 18.8333C8.83574 18.8333 6.38269 19.6352 6.04122 20.863C7.89387 22.5039 10.3306 23.5 13 23.5C15.6694 23.5 18.1062 22.5039 19.9588 20.863ZM13 5.99999C10.1756 5.99999 8.33335 8.04838 8.33335 10.6667C8.33335 14.6653 10.3877 16.5 13 16.5C15.5878 16.5 17.6667 14.7262 17.6667 10.9C17.6667 8.24183 15.8166 5.99999 13 5.99999ZM10.6667 10.6667C10.6667 13.3141 11.6213 14.1667 13 14.1667C14.374 14.1667 15.3334 13.3481 15.3334 10.9C15.3334 9.44214 14.4183 8.33332 13 8.33332C11.5227 8.33332 10.6667 9.28512 10.6667 10.6667Z"
      fill="white"
    />
  </svg>
);

export const UserWhiteIcon = (props) => (
  <Icon component={UserWhiteSvg} {...props} />
);

const ExitWhiteSvg = () => (
  <svg
    width="18"
    height="20"
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 15V12H6V8H13V5L18 10L13 15ZM11 0C11.5304 0 12.0391 0.210714 12.4142 0.585786C12.7893 0.960859 13 1.46957 13 2V4H11V2H2V18H11V16H13V18C13 18.5304 12.7893 19.0391 12.4142 19.4142C12.0391 19.7893 11.5304 20 11 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H11Z"
      fill="#E3E3E3"
    />
  </svg>
);

export const ExitWhiteIcon = (props) => (
  <Icon component={ExitWhiteSvg} {...props} />
);

const CrateSvg = () => (
  <svg
    width="10"
    height="9"
    viewBox="0 0 10 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 9L0.669872 0L9.33013 0L5 9Z" fill="#41098B" />
  </svg>
);

export const CrateIcon = (props) => <Icon component={CrateSvg} {...props} />;

const WalletTransSvg = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.1887 0.922254C30.4014 0.290069 32.7076 1.57129 33.3398 3.78393C33.4461 4.15619 33.5001 4.54145 33.5001 4.9286L33.5001 8.41667H37.6668C39.9679 8.41667 41.8334 10.2822 41.8334 12.5833V37.5833C41.8334 39.8845 39.9679 41.75 37.6668 41.75H4.33342C2.03223 41.75 0.166748 39.8845 0.166748 37.5833H0.222381C0.185398 37.3593 0.166748 37.1323 0.166748 36.9047V12.0715C0.166748 10.2111 1.39999 8.57618 3.18874 8.06511L28.1887 0.922254ZM17.1252 37.5833H37.6668L37.6668 20.9167H33.5001V16.75H37.6668L37.6668 12.5833H33.5001L33.5001 29.7619C33.5001 31.6222 32.2668 33.2571 30.4781 33.7682L17.1252 37.5833ZM4.33339 12.0714V36.9047L29.3334 29.7618V4.92855L4.33339 12.0714ZM25.1668 16.75C25.1668 17.9006 24.234 18.8333 23.0834 18.8333C21.9328 18.8333 21.0001 17.9006 21.0001 16.75C21.0001 15.5994 21.9328 14.6667 23.0834 14.6667C24.234 14.6667 25.1668 15.5994 25.1668 16.75Z"
      fill="#E3E3E3"
    />
  </svg>
);

export const WalletTransIcon = (props) => (
  <Icon component={WalletTransSvg} {...props} />
);

const CloseSvg = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.75 2.0125L15.9875 0.25L9 7.2375L2.0125 0.25L0.25 2.0125L7.2375 9L0.25 15.9875L2.0125 17.75L9 10.7625L15.9875 17.75L17.75 15.9875L10.7625 9L17.75 2.0125Z"
      fill="#3E3F42"
    />
  </svg>
);

export const CloseIcon = (props) => <Icon component={CloseSvg} {...props} />;

const PaymentQuestSvg = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 21.375C0 9.96937 9.21937 0.75 20.625 0.75C32.0306 0.75 41.25 9.96937 41.25 21.375C41.25 32.7806 32.0306 42 20.625 42C9.21937 42 0 32.7806 0 21.375ZM4.125 21.375C4.125 30.4706 11.5294 37.875 20.625 37.875C29.7206 37.875 37.125 30.4706 37.125 21.375C37.125 12.2794 29.7206 4.875 20.625 4.875C11.5294 4.875 4.125 12.2794 4.125 21.375ZM20.6257 31.6875C21.7651 31.6875 22.6889 30.7641 22.6889 29.625C22.6889 28.4859 21.7651 27.5625 20.6257 27.5625C19.4862 27.5625 18.5625 28.4859 18.5625 29.625C18.5625 30.7641 19.4862 31.6875 20.6257 31.6875ZM18.5625 25.5H22.6875V23.4375C22.6875 23.4425 22.6972 23.4318 22.7193 23.4075C22.7734 23.3478 22.9017 23.2065 23.1423 23.0157C23.3489 22.8518 23.4129 22.8093 23.9349 22.4784C25.7112 21.3523 26.8125 19.3941 26.8125 17.25C26.8125 13.8327 24.0423 11.0625 20.625 11.0625C17.2077 11.0625 14.4375 13.8327 14.4375 17.25H18.5625C18.5625 16.1109 19.4859 15.1875 20.625 15.1875C21.7641 15.1875 22.6875 16.1109 22.6875 17.25C22.6875 17.9663 22.3215 18.6172 21.7263 18.9945C21.0585 19.4179 20.9476 19.4913 20.5786 19.7841C19.3519 20.7572 18.5625 21.9168 18.5625 23.4375V25.5Z"
      fill="black"
      fillOpacity="0.54"
    />
  </svg>
);

export const PaymentQuestIcon = (props) => (
  <Icon component={PaymentQuestSvg} {...props} />
);

const PaymentCheckSvg = () => (
  <svg
    width="45"
    height="45"
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.625 43.125C10.2341 43.125 1 33.8909 1 22.5C1 11.1091 10.2341 1.875 21.625 1.875C33.0159 1.875 42.25 11.1091 42.25 22.5C42.25 33.8909 33.0159 43.125 21.625 43.125ZM21.625 39.375C30.9448 39.375 38.5 31.8198 38.5 22.5C38.5 13.1802 30.9448 5.625 21.625 5.625C12.3052 5.625 4.75 13.1802 4.75 22.5C4.75 31.8198 12.3052 39.375 21.625 39.375ZM26.8959 17.4583L19.5175 24.8367L15.5766 20.8958L13.1459 23.3265L19.5175 29.6981L29.3266 19.889L26.8959 17.4583Z"
      fill="#50A775"
    />
  </svg>
);

export const PaymentCheckIcon = (props) => (
  <Icon component={PaymentCheckSvg} {...props} />
);

const PaymentCancelSvg = () => (
  <svg
    width="45"
    height="45"
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 22.5C1 33.8909 10.2341 43.125 21.625 43.125C33.0159 43.125 42.25 33.8909 42.25 22.5C42.25 11.1091 33.0159 1.875 21.625 1.875C10.2341 1.875 1 11.1091 1 22.5ZM38.5 22.5C38.5 31.8198 30.9448 39.375 21.625 39.375C12.3052 39.375 4.75 31.8198 4.75 22.5C4.75 13.1802 12.3052 5.625 21.625 5.625C30.9448 5.625 38.5 13.1802 38.5 22.5Z"
      fill="#DC3545"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.9508 19.848L26.25 15.5488L28.9017 18.2005L24.6025 22.4997L28.9017 26.7988L26.25 29.4505L21.9508 25.1513L17.6517 29.4505L15 26.7988L19.2992 22.4997L15 18.2005L17.6517 15.5488L21.9508 19.848Z"
      fill="#DC3545"
    />
  </svg>
);

export const PaymentCancelIcon = (props) => (
  <Icon component={PaymentCancelSvg} {...props} />
);

const PaymentClockSvg = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.625 41.25C9.23413 41.25 0 32.0159 0 20.625C0 9.23413 9.23413 0 20.625 0C32.0159 0 41.25 9.23413 41.25 20.625C41.25 32.0159 32.0159 41.25 20.625 41.25ZM20.625 36.0938C29.1682 36.0938 36.0938 29.1682 36.0938 20.625C36.0938 12.0818 29.1682 5.15625 20.625 5.15625C12.0818 5.15625 5.15625 12.0818 5.15625 20.625C5.15625 29.1682 12.0818 36.0938 20.625 36.0938ZM18.0544 23.1989H28.3669V18.0426H23.2124V10.3082H18.0544V23.1989Z"
      fill="#FE8B00"
    />
  </svg>
);

export const PaymentClockIcon = (props) => (
  <Icon component={PaymentClockSvg} {...props} />
);