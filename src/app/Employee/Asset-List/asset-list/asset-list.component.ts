import { Component } from '@angular/core';
import { Asset } from '../../../Models/asset';
import { AssetsService } from '../../../Services/assets.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrl: './asset-list.component.scss'
})
export class AssetListComponent {

  assetList?:Asset[];
  totalLength:any;
  page:number=1;

  constructor( private service:AssetsService) {
  }

  ngOnInit() {
    this.assetList = this.getAssets(this.service);
    console.log(this.assetList);
  }

  getAssets(service:AssetsService): Asset[] {
    return service.assetList
  }

}
