export interface FileType {
  address: {
    address_id: string;
    address_line1: string;
    city: string;
    common_place_name: string;
    cross_street1: string;
    cross_street2: string;
    first_due: string;
    geohash: string;
    latitude: number;
    longitude: number;
    name: string;
    number: string;
    postal_code: string;
    prefix_direction: string;
    response_zone: string;
    state: string;
    suffix_direction: string;
    type: string;
  };
  apparatus: Apparatus[];
  description: {
    comments: string;
    day_of_week: string;
    event_closed: string;
    event_id: string;
    event_opened: string;
    extended_data: {
      dispatch_duration: number;
      event_duration: number;
      response_time: number;
    };
    first_unit_arrived: string;
    first_unit_dispatched: string;
    first_unit_enroute: string;
    hour_of_day: number;
    incident_number: string;
    loi_search_complete: string;
    subtype: string;
    type: string;
  };
  fire_department: {
    fd_id: string;
    firecares_id: string;
    name: string;
    shift: string;
    state: string;
    timezone: string;
  };
  version: string;
}

export interface Apparatus {
  car_id: string;
  extended_data: {
    event_duration: 4134;
    response_duration: 762;
    travel_duration: 504;
    turnout_duration: 258;
  };
  geohash: string;
  personnel: string[];
  shift: string;
  station: string;
  unit_id: string;
  unit_status: {
    acknowledged: {
      geohash: string;
      latitude: number;
      longitude: number;
      timestamp: string;
    };
    arrived: {
      geohash: string;
      latitude: number;
      longitude: number;
      timestamp: string;
    };
    available: {
      geohash: string;
      latitude: number;
      longitude: number;
      timestamp: string;
    };
    cleared: {
      geohash: string;
      latitude: number;
      longitude: number;
      timestamp: string;
    };
    dispatched: {
      geohash: string;
      latitude: number;
      longitude: number;
      timestamp: string;
    };
    enroute: {
      geohash: string;
      latitude: number;
      longitude: number;
      timestamp: string;
    };
    "~": {
      geohash: string;
      latitude: number;
      longitude: number;
      timestamp: string;
    };
  };
  unit_type: string;
}
