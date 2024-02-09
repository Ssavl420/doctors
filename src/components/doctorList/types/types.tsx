import { TDivisionCards } from "../divisionCard/types/types";

export type TDivisionInfoProps = {
   divisionId: string,
   divisionName: string,
   divisionAddress: string,
   divisionForKids: string,
   doctors: {
      times: {
         EMPLOYER_ID: string;
         DAY_NUMBER: string;
         TIME_BEGIN_S: string;
         TIME_END_S: string;
      }[],
      resources: {
         EMP_SPEC: string;
         EMP_NAME: string;
         CAB_NAME: string;
         EMP_ID: string;
      }[],
   },
};

export type TDivisionType = {
   id: string,
   lpu_name: string,
   address: string,
   for_kids: string,
};

export type TDivision = {
   id: string;
   division: string;
   address: string;
   for_kids: string;
   doctors: {
      ophthalmologists?: TDivisionCards[];
      otorhinolaryngologists?: TDivisionCards[]
   };
};

export type TDoctorListProps = {
   selectedLpuId: string
};

export type TDivisionTitle = {
   item: {
      division: string,
      address: string
   }
}