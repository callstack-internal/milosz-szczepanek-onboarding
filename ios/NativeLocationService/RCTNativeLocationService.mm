//
//  RCTNativeLocationService.mm
//  HardcoreWeather
//
//  Created by Miłosz Szczepanek on 08/04/2025.
//

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(NativeLocationService, NSObject)

RCT_EXTERN_METHOD(getCurrentLocationDetails: (RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)

@end
