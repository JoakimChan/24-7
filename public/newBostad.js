export default class NewBostad {
  constructor ( type, address, city, price, rooms, area, balcony, floor, elevator, year, storehouse, parking, garden, name, lastName, email, phone ) {
    this.type = type;
    this.address = address;
    this.city = city;
    this.price = price;
    this.rooms = rooms;
    this.area = area;
    this.balcony = balcony;
    this.floor = floor;
    this.elevator = elevator;
    this.year = year;
    this.storehouse = storehouse;
    this.parking = parking;
    this.garden = garden;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
  }

  getPhoto ( type ) {
    switch ( type ) {
      case 'lägenhet':
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGElIHM07zCr3loYfu1zODAsFI9y-hqb0DajmmtmgtpPDWcOFkdbTbkunPeUk2r01t6o&usqp=CAU"
      case 'vila':
        return "https://images.freeimages.com/clg/images/42/425484/illustration-of-house_f.jpg"
      case 'radhus':
        return "https://resources.mynewsdesk.com/image/upload/c_fill,dpr_auto,f_auto,g_auto,q_auto:good,w_746/zoehjutarkci1dzexwnz"
      case 'tomt':
        return "https://static.byggahus.se/attachments/images/large/585/585300-24277717e17a4f57a6a7c5860b0bb4ab.jpg"
    }
  }


  dataInfo () {
    return {
      "id": 'id' + new Date().getTime(),
      "photo": this.getPhoto(this.type),  
      "type": this.type,
      "address": this.address,
      "city": this.city,
      "price": this.price,
      "rooms": this.rooms,
      "area": this.area,
      "balcony": this.balcony,
      "floor": this.floor,
      "elevator": this.elevator,
      "year": this.year,
      "storehouse": this.storehouse,
      "parking": this.parking,
      "garden": this.garden,
      "name": this.name,
      "lastName": this.lastName,
      "email": this.email,
      "phone": this.phone
    }
  }
}
