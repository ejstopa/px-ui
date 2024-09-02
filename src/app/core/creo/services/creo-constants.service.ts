import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreoConstantsService {

  readonly workspaceBaseDirectoty = "c:/px-infrastructure/workspaces";
  readonly libraryBaseDirectory = "c:/px-infrastructure/library";
  readonly librarySubFolders = [
    "0001", "0002", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "0010",
    "0011", "0012", "0013", "0014", "0015", "0016", "0017", "0018", "0019", "0020"
  ]

  constructor() { }
}