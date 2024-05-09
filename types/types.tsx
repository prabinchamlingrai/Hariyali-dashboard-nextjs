export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

export type SideNavItemGroup = {
  title: string;
  menuList: SideNavItem[];
};
export type stateType = {
  stateId: number;
  districtId: number;
  palikaId: number;
  stateName: string;
  districtName: string;
  palikaName: string;
};
