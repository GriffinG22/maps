interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementID: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(elementID) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  //Bad no need to repeat code
  /* addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    });
  } */

  //Bad because it isnt scalable - will work here but becomes an issue when adding many other class types
  /* addMarker(mappableObj: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappableObj.location.lat,
        lng: mappableObj.location.lng,
      },
    });
  } */

  addMarker(mappableObj: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappableObj.location.lat,
        lng: mappableObj.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: "Hi There!",
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
