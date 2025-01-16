package com.ktproject;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainRestController {

    // RequestMapping에 있는 경로에 매핑이된다면 아래 메서드가 실행되고 반환되는 값이 사용자에게 응답됨
    @RequestMapping("/")
    public String index(){
        return "index";
    }

}
