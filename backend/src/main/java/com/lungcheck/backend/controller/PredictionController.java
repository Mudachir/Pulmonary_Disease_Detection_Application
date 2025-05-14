package com.lungcheck.backend.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
public class PredictionController {

    @PostMapping("/predict")
    public String predict(@RequestParam("image") MultipartFile image) throws IOException {

        String imagePath = "E:/Pulmonary_Disease_Detection_Application/ml-model/uploaded_image.jpg";
        File tempFile = new File(imagePath);
        image.transferTo(tempFile);


        ProcessBuilder pb = new ProcessBuilder(
                "E:/Pulmonary_Disease_Detection_Application/.venv/Scripts/python.exe",
                "E:/Pulmonary_Disease_Detection_Application/ml-model/predict.py",
                imagePath
        );

        pb.redirectErrorStream(true);
        Process process = pb.start();


        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        String line;
        String lastLine = "";
        while ((line = reader.readLine()) != null) {
            lastLine = line;
        }

        return lastLine.isEmpty() ? "Prediction failed" : lastLine;
    }
}
