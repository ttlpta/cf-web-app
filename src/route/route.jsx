import { lazy } from "react";
import PATH from "../contants/path";

/* -------------------------------------------------- PUBLIC ROUTE -------------------------------------------------- */

const Login = lazy(() => import('../pages/Login'));
const New = lazy(() => import('../pages/New'));
const NewDetail = lazy(() => import('../pages/NewDetail'));
const Schedule = lazy(() => import('../pages/Schedule'));
const ScheduleDetail = lazy(() => import('../pages/ScheduleDetail'));
const ArtistProfile = lazy(() => import('../pages/ArtistProfile'));
const TopPage = lazy(() => import('../pages/TopPage'));

/* -------------------------------------------------- PRIVATE ROUTE ------------------------------------------------- */


const createRoute = (title, path, children) => ({
  title,
  path,
  children,
});

export const PUBLIC_ROUTE = [
  createRoute('Login', PATH.LOGIN, <Login />),
  createRoute('News', PATH.NEW.LIST, <New />),
  createRoute('News Detail', PATH.NEW.DETAIL(), <NewDetail />),
  createRoute('Schedules', PATH.SCHEDULE.LIST, <Schedule />),
  createRoute('Schedules Detail', PATH.SCHEDULE.DETAIL(), <ScheduleDetail />),
  createRoute('Schedules Detail', PATH.PROFILE, <ArtistProfile />),
  createRoute('Schedules Detail', PATH.DEFAULT, <TopPage />),
]

export const PRIVATE_ROUTE = [];