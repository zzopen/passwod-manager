import { AppProvider, PageContent, AppLogo } from "./app";
export * from "./app";

import { Login } from "./login";
export * from "./login";

import { Exception } from "./exception";
export * from "./exception";

import { Modal } from "./base/modal";
export * from "./base/modal";

import { Drawer } from "./base/drawer";
export * from "./base/drawer";

// declare module '@vue/runtime-core' {
//   export interface GlobalComponents {
//     MAppProvider: typeof AppProvider
//     MAppLogo: typeof AppLogo
//     MPageContent: typeof PageContent
//     MLogin: typeof Login
//     MException: typeof Exception
//     MModal: typeof Modal
//     MDrawer: typeof Drawer
//   }
// }
