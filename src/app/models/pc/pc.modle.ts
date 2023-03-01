export interface CpuDetails {

        brand_name: String;
        type_name: String;
        item_details: String;
        serial_no: String;

}


export interface MainBoardDetails {

  brand_name: String;
  type_name: String;
  item_details: String;
  serial_no: String;

}

export interface PowerDetails {

  brand_name: String;
  type_name: String;
  item_details: String;
  serial_no: String;

}


export interface RamDetails {

  brand_name: String;
  type_name: String;
  item_details: String;
  serial_no: String;

}


export interface StrorageDetails {

  brand_name: String;
  type_name: String;
  item_details: String;
  serial_no: String;


}


export interface PcList {
  pc_id:number;
  project_name: String;
  pc_hostname: String;
  pc_details: String;
  pc_fixasset: String;
  serial_num: String;
  is_aio: String;
  dongle_id: String;
  io_card: String;
  ram_slot: String;
  pc_size: String;
  lan_card: String;
  cpu_details: String;
  mainboard_details: String;
  powersupply_details: String;
  ram_details: String;
  storage_details: String;
  


}


