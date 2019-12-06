import cdk = require('@aws-cdk/core');
import isup_service = require('../lib/isup_service');

export class IsupStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new isup_service.IsupService(this, 'Isup');
  }
}
