class CountryData {
  private _data: string;

  constructor() {
    this._data = "";
  }

  get data(): string {
    return this._data;
  }

  set data(value: string) {
    this._data = value;
  }
}

const Bangladesh = new CountryData();
Bangladesh.data = "USA";
