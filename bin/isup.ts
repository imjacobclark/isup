#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { IsupStack } from '../lib/isup-stack';

const app = new cdk.App();
new IsupStack(app, 'IsupStack');
