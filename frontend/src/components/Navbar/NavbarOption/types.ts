import type { NavLinkType } from '../types';

export type NavbarOptionProps = {
  navItem: NavLinkType;
  currentURL?: (params: { isActive: boolean }) => string;
};