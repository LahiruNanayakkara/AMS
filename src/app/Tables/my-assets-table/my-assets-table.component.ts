import { Component } from '@angular/core';
import { Asset } from '../../Models/asset';
import { AssetsService } from '../../Services/assets.service';

@Component({
  selector: 'app-my-assets-table',
  templateUrl: './my-assets-table.component.html',
  styleUrl: './my-assets-table.component.scss'
})
export class MyAssetsTableComponent {

  assetList?:Asset[];
  totalLength:any;
  page:number=0;

  constructor( private service:AssetsService) {
  }

  ngOnInit() {
    this.assetList = this.getAssets(this.service);
  }

  getAssets(service:AssetsService): Asset[] {
    return service.assetList
  }

}
