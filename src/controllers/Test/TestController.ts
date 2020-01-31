import { Controller, Get, Inject } from "@tsed/common";
import express from "express";
import TestService from "../../services/Test/TestService";

@Controller("/")
class TestController {
    @Inject(TestService)
    private readonly testService: TestService;

    public constructor() {
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
