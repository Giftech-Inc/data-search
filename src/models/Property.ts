class Property {
  name: string;
  location: string;

  constructor(status: { name: string; location: string }) {
    this.name = status.name;
    this.location = status.location;
  }
}
export default Property;
