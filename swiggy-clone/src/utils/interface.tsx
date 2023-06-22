export interface dataType {
    id : string, 
    name : string,
    address: string,
    totalRatingsString?: number | string,
    cuisines?: string[] | undefined,
    costForTwo?: number | undefined,
    uuid?:string,
    area?:string,
    type?:string,
    cloudinaryImageId?:string,
    promoted?:string,
    avgRating: number,
    totalRatings?:number | string, 
  }

  export interface RestoObj {
    data : dataType 
  }