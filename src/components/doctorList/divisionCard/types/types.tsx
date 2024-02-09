import { ReactNode } from "react";

export type TDivisionCards = {
   name: string;
   cabinet: string;
   id: string;
   time_table: TTimeRange[];
}

export type TAssembledDivisionCards = {
   item: TDivisionCards[],
   specialty: string
}

export type TDoctorSpecialty = {
   specialty: string,
}

export type TDoctorCard = {
   specialty: {
      name: string,
      cabinet: string,
      id: string,
      time_table: TTimeRange[],
   }
}

export type TTimeRange = {
   day_number: string;
   time_start: string;
   time_end: string;
}

export interface TimeTableProps {
   dayOfWeek: string,
   children: ReactNode;
}