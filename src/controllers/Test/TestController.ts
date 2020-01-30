import { Controller, Get } from "@tsed/common";
import express from "express";
import TestService from "../../services/Test/TestService";

@Controller("/")
class TestController {

    public constructor(private readonly testService: TestService) {
    }

    @Get()
    public Test(req: express.Request, res: express.Response) {
        return res
            .status(200)
            .json({
                messge: this.testService.getMessage("Inversify IoC In NodeJS")
            });
    }
}

export default TestController;
