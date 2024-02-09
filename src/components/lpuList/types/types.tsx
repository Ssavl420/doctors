export type TLpuListProps = {
   onLpuSelect: (selectedLpu: {
      id: string;
      value: string;
      address: string;
      label: string;
      phone: string;
   }) => void;
};