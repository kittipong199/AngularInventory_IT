export interface ItemAll {
// get  Itemcollection Table
  item_id: number;
  brand_name: string;
  type_name: string;
  serial_no:string;
  item_details:string;
  fixasset:string;
  project_name:string;
}



export interface postItem{
    // Post  Itemcollection Table
  brand_name: string;
  type_name: string;
  serial_numbar:string;
  item_details:string;
  fixasset:string;
  project_name:string;
}


// get data Project table
export interface getProject {

  project_id: number;
  project_name: string;

}
// get data Brand table
export interface getBrand {

  brand_id: number;
  brand_name: string;

}
// get data type table
export interface getType {

  type_id: number;
  type_name: string;

}

/// get count type
export interface getTypeCount {

  item_id: number;
  brand_name:string;
  type_name: string;
  project_name:string;
  counts: any;

}

export interface getStatus{

  status_id: number;
  status_name: string;
}




