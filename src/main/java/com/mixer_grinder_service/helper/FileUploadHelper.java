package com.mixer_grinder_service.helper;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Component
@Service


@Transactional
public class FileUploadHelper {
//    public final String UPLOAD_DIR="F:\\MixerServicePD\\src\\main\\resources\\static\\image";
    public FileUploadHelper() throws IOException {
    }
    public final String UPLOAD_DIR=new ClassPathResource("static/image").getFile().getAbsolutePath();

    public boolean uploadFile(MultipartFile multipartFile){
        boolean f = false;
        try {

            Files.copy(multipartFile.getInputStream(), Paths.get(UPLOAD_DIR + File.separator + multipartFile.getOriginalFilename()), StandardCopyOption.REPLACE_EXISTING);
            f = true;

        }catch (Exception e){
            e.printStackTrace();
        }
        return f;
    }

}
