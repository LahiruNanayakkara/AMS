import { Component } from '@angular/core';
import { Asset } from '../../../asset';
import { AssetListServiceService } from './asset-list-service.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrl: './asset-list.component.scss'
})
export class AssetListComponent {

  assetList?:Asset[];
  totalLength:any;
  page:number=1;

  constructor( private service:AssetListServiceService) {
  }

  ngOnInit() {
    this.assetList = this.getAssets(this.service);
    console.log(this.assetList);
  }

  getAssets(service:AssetListServiceService): Asset[] {
    return service.assetList
  }

}
