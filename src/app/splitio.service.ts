import { Injectable } from '@angular/core';
import { SplitFactory } from '@splitsoftware/splitio-browserjs';
import * as SplitIO from '@splitsoftware/splitio-browserjs/types/splitio';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SplitService {
  private splitClient!: SplitIO.IClient;
  public sdkReady$: Subject<void> = new Subject<void>();

  public initSdk(): void {
    const splitSDK: SplitIO.ISDK = SplitFactory({
      core: {
        authorizationKey: 'pbfu94fe6qpi4cok6mtt3dkemiln27siv3r4', // Client-Side API Key; Safe to be committed for demo purposes
        key: Math.random().toString(), // https://help.split.io/hc/en-us/articles/360019916311-Traffic-type
      }
    });

    console.info(`Split SDK: init`);
    this.splitClient = splitSDK.client();

    this.splitClient.on(this.splitClient.Event.SDK_READY, () => {
      console.info(`Split SDK: ready`);
      this.sdkReady$.next();
    });
  }

  public destroy(): void {
    console.info(`Split SDK: destroy`);
    this.splitClient?.destroy();
  }

  public getTreatment(treatmentName: string): boolean {
    console.info(`Split SDK: getting treatment: ${treatmentName}`);
    let treatment = this.splitClient.getTreatment(treatmentName);
    console.info(`Split SDK: treatment value: ${treatment}`);
    return (treatment === 'on');
  }
}
