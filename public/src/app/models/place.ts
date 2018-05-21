export class Place {
    namePlace : string;
    email: string;
    password : string;
    hashRecovery : string;
    cnpj : string;
    description : string;
    pageFacebook : string;
    pageInstagram : string;
    webSite : string;
    logoPath : string;
    headerImgPath : string;
    zipCode: string;
    street : string;
    number : string;
    complement : string;
    neighborhood : string;
    city : string;
    state : string;
    loc: PlaceLoc;
    sunday : PlaceFunction;
    monday : PlaceFunction;
    tuesday : PlaceFunction;
    wednesday : PlaceFunction;
    thursday : PlaceFunction;
    friday : PlaceFunction;
    saturday : PlaceFunction;
}

export class PlaceFunction{
    constructor(
        status : boolean,
        timeStart : string,
        timeEnd : string,
        menu : string){}
}

export class PlaceLoc{
    constructor(coordinates: any){}
}
