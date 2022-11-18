import { HttpHeaders } from "@angular/common/http";

export class HttpCommon {
  private _basePath: string;
  private _httpOptions: Object;
  constructor(path: string) {
    this._basePath = "https://localhost:7017/api/v1" + path;
    this._httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  }
  get basePath(): string {
    return this._basePath;
  }
  get httpOptions(): Object {
    return this._httpOptions;
  }
}