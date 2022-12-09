import moment from "moment-timezone";
import {readTimeZone} from "../../providers/env";

export const dateParser = (value: any) => {
  const dateNew = moment.tz(value, readTimeZone()).format();
  return dateNew;
};
