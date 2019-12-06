"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@aws-cdk/core");
const apigateway = require("@aws-cdk/aws-apigateway");
const lambda = require("@aws-cdk/aws-lambda");
const core_1 = require("@aws-cdk/core");
class IsupService extends core.Construct {
    constructor(scope, id) {
        super(scope, id);
        const handler = new lambda.Function(this, "IsupHandler", {
            timeout: core_1.Duration.minutes(5),
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
exports.IsupService = IsupService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXN1cF9zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXN1cF9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVDO0FBQ3ZDLHNEQUF1RDtBQUN2RCw4Q0FBK0M7QUFDL0Msd0NBQXlDO0FBRXpDLE1BQWEsV0FBWSxTQUFRLElBQUksQ0FBQyxTQUFTO0lBQzNDLFlBQVksS0FBcUIsRUFBRSxFQUFVO1FBQ3pDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDckQsT0FBTyxFQUFFLGVBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUNwQyxPQUFPLEVBQUUsV0FBVztTQUN2QixDQUFDLENBQUM7UUFFSCxNQUFNLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNqRCxXQUFXLEVBQUUsY0FBYztZQUMzQixXQUFXLEVBQUUsMkJBQTJCO1NBQzNDLENBQUMsQ0FBQztRQUVILE1BQU0sZUFBZSxHQUFHLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtZQUM5RCxnQkFBZ0IsRUFBRSxFQUFFLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFO1NBQ3RFLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLFFBQVE7SUFDeEQsQ0FBQztDQUNKO0FBdEJELGtDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb3JlID0gcmVxdWlyZShcIkBhd3MtY2RrL2NvcmVcIik7XG5pbXBvcnQgYXBpZ2F0ZXdheSA9IHJlcXVpcmUoXCJAYXdzLWNkay9hd3MtYXBpZ2F0ZXdheVwiKTtcbmltcG9ydCBsYW1iZGEgPSByZXF1aXJlKFwiQGF3cy1jZGsvYXdzLWxhbWJkYVwiKTtcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSBcIkBhd3MtY2RrL2NvcmVcIjtcblxuZXhwb3J0IGNsYXNzIElzdXBTZXJ2aWNlIGV4dGVuZHMgY29yZS5Db25zdHJ1Y3Qge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBjb3JlLkNvbnN0cnVjdCwgaWQ6IHN0cmluZykge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiSXN1cEhhbmRsZXJcIiwge1xuICAgICAgICAgICAgdGltZW91dDogRHVyYXRpb24ubWludXRlcyg1KSxcbiAgICAgICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU184XzEwLCBcbiAgICAgICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmFzc2V0KFwicmVzb3VyY2VzXCIpLFxuICAgICAgICAgICAgaGFuZGxlcjogXCJpc3VwLm1haW5cIlxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBhcGkgPSBuZXcgYXBpZ2F0ZXdheS5SZXN0QXBpKHRoaXMsIFwiaXN1cC1hcGlcIiwge1xuICAgICAgICAgICAgcmVzdEFwaU5hbWU6IFwiSXN1cCBTZXJ2aWNlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIHNlcnZpY2Ugc2VydmVzIGlzdXAuXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaXN1cEludGVncmF0aW9uID0gbmV3IGFwaWdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24oaGFuZGxlciwge1xuICAgICAgICAgICAgcmVxdWVzdFRlbXBsYXRlczogeyBcImFwcGxpY2F0aW9uL2pzb25cIjogJ3sgXCJzdGF0dXNDb2RlXCI6IFwiMjAwXCIgfScgfVxuICAgICAgICB9KTtcblxuICAgICAgICBhcGkucm9vdC5hZGRNZXRob2QoXCJHRVRcIiwgaXN1cEludGVncmF0aW9uKTsgLy8gR0VUIC9cbiAgICB9XG59Il19