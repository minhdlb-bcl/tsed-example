import { Service } from "@tsed/common";

@Service()
class TestService {
    public constructor() {
        console.log("Test Service Called");
    }

    public getMessage(s: string): string {
        return `Test Service :${s}`;
    }
}

export default TestService;
