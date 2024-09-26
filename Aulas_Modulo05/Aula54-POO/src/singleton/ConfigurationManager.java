package singleton;

import java.io.IOException;
import java.util.Properties;
import java.io.InputStream;

//Ckasse que só pode ser instanciada uma única vez

import java.util.Properties;

public class ConfigurationManager {
    private static ConfigurationManager instance; //pertence à classe, não a uma instancia
    private Properties properties; //simular carregamento de arquivos de configuração

    //Construtor privado - impede que outras classes criem novas instancias (new)
    private ConfigurationManager() {
        this.properties = new Properties();
        //Usar stream pra carregar arquivo de condigurações
        try(InputStream input =
                    getClass().getClassLoader().getResourceAsStream("Config.properties")){
                if(input==null){
                    System.out.println("O arquivo de configurações não foi encontrado");
                    return;
                }
            properties.load(input);
        }catch(IOException exception){
            exception.printStackTrace();
        }
    }
    //Ponto de acesso global à instância
    public static ConfigurationManager getInstance() {
        //Se não tiver instância, cria uma
        if(instance==null){
            instance = new ConfigurationManager();
        }
        //Se tiver, retorna ela
        return instance;
    }

    public String getProperty(String key){
        //Busca propriedades
        return properties.getProperty(key);
    }
}
