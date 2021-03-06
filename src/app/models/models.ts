export interface Student {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        street: string;
        city: string;
        state: string;
        postcode: number;
        coordinates: {
          latitude: number;
          longitude: number;
        },
        timezone: {
          offset: number,
          description: string;
        }
      };
      email: string;
      login: {
        uuid: string;
        username: string;
        password: string;
        salt: string;
        md5: string;
        sha1: string;
        sha256: string;
      };
      dob: {
        date: string;
        age: 26
      };
      registered: {
        date: string;
        age: 17
      };
      phone: string;
      cell: string;
      id: {
        name: string;
        value: string;
      };
      picture: {
        large: string;
        medium: string;
        thumbnail: string;
      };
      nat: string;
    }

export interface StudentResponse {
    results: Student[];
    
    info: {
        seed: string;
        results: number;
        page: number;
        version: string;
      };
      
}
