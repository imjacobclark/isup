import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import Isup = require('../lib/isup-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Isup.IsupStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});