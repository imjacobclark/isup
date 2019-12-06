import core = require("@aws-cdk/core");
import apigateway = require("@aws-cdk/aws-apigateway");
import lambda = require("@aws-cdk/aws-lambda");
import { Duration } from "@aws-cdk/core";

export class IsupService extends core.Construct {
    constructor(scope: core.Construct, id: string) {
        super(scope, id);

        const handler = new lambda.Function(this, "IsupHandler", {
            timeout: Duration.minutes(5),
            runtime: lambda.Runtime.NODEJS_8_10, 
            code: lambda.Code.asset("resources"),
            handler: "isup.main"
        });

        const api = new apigateway.RestApi(this, "isup-api", {
            restApiName: "Isup Service",
            description: "This service serves isup."
        });

        const isupIntegration = new apigateway.LambdaIntegration(handler, {
            requestTemplates: { "application/json": '{ "statusCode": "200" }' }
        });

        api.root.addMethod("GET", isupIntegration); // GET /
    }
}