-- MySQL Script generated by MySQL Workbench
-- Sat Oct  5 16:47:20 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Cargo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Cargo` (
  `idCargo` INT NOT NULL AUTO_INCREMENT,
  `nomeCargo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCargo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Endereco` (
  `idEndereco` INT NOT NULL AUTO_INCREMENT,
  `endLogradouro` VARCHAR(45) NOT NULL,
  `endNumero` VARCHAR(45) NOT NULL,
  `endComplemento` VARCHAR(45) NULL,
  `endCidade` VARCHAR(45) NOT NULL,
  `endEstado` VARCHAR(45) NOT NULL,
  `endPais` VARCHAR(45) NOT NULL,
  `endCEP` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idEndereco`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Equipe`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Equipe` (
  `idEquipe` INT NOT NULL AUTO_INCREMENT,
  `nomeEquipe` VARCHAR(45) NOT NULL,
  `numerRecursos` INT NOT NULL,
  PRIMARY KEY (`idEquipe`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Recurso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Recurso` (
  `idRecurso` INT NOT NULL AUTO_INCREMENT,
  `nomeRecurso` VARCHAR(45) NOT NULL,
  `salarioRecurso` FLOAT NOT NULL,
  `Cargo_idCargo` INT NOT NULL,
  `Endereco_idEndereco` INT NOT NULL,
  `Equipe_idEquipe1` INT NOT NULL,
  PRIMARY KEY (`idRecurso`),
  INDEX `fk_Recurso_Cargo_idx` (`Cargo_idCargo` ASC) VISIBLE,
  INDEX `fk_Recurso_Endereco1_idx` (`Endereco_idEndereco` ASC) VISIBLE,
  INDEX `fk_Recurso_Equipe1_idx` (`Equipe_idEquipe1` ASC) VISIBLE,
  CONSTRAINT `fk_Recurso_Cargo`
    FOREIGN KEY (`Cargo_idCargo`)
    REFERENCES `mydb`.`Cargo` (`idCargo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Recurso_Endereco1`
    FOREIGN KEY (`Endereco_idEndereco`)
    REFERENCES `mydb`.`Endereco` (`idEndereco`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Recurso_Equipe1`
    FOREIGN KEY (`Equipe_idEquipe1`)
    REFERENCES `mydb`.`Equipe` (`idEquipe`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Contato`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Contato` (
  `idContato` INT NOT NULL AUTO_INCREMENT,
  `tipoContato` VARCHAR(45) NULL,
  `numeroContato` VARCHAR(45) NOT NULL,
  `Recurso_idRecurso` INT NOT NULL,
  `Recurso_Equipe_idEquipe` INT NOT NULL,
  PRIMARY KEY (`idContato`),
  INDEX `fk_Contato_Recurso1_idx` (`Recurso_idRecurso` ASC, `Recurso_Equipe_idEquipe` ASC) VISIBLE,
  CONSTRAINT `fk_Contato_Recurso1`
    FOREIGN KEY (`Recurso_idRecurso`)
    REFERENCES `mydb`.`Recurso` (`idRecurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Projeto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Projeto` (
  `idProjeto` INT NOT NULL AUTO_INCREMENT,
  `nomeProjeto` VARCHAR(45) NOT NULL,
  `statusProj` ENUM('Em andamento', 'Aguardando Prioridade', 'Finalizadi') NOT NULL,
  `dataInicioProj` DATE NOT NULL,
  `previsaoDataFinalProj` DATE NOT NULL,
  `dataFinalProj` DATE NULL,
  `previsaoNumHoras` DECIMAL NOT NULL,
  `numHorasProj` DECIMAL NULL,
  `Recurso_idGerente` INT NOT NULL,
  `Equipe_idEquipe` INT NOT NULL,
  PRIMARY KEY (`idProjeto`),
  INDEX `fk_Projeto_Recurso1_idx` (`Recurso_idGerente` ASC) VISIBLE,
  INDEX `fk_Projeto_Equipe1_idx` (`Equipe_idEquipe` ASC) VISIBLE,
  CONSTRAINT `fk_Projeto_Recurso1`
    FOREIGN KEY (`Recurso_idGerente`)
    REFERENCES `mydb`.`Recurso` (`idRecurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Projeto_Equipe1`
    FOREIGN KEY (`Equipe_idEquipe`)
    REFERENCES `mydb`.`Equipe` (`idEquipe`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Ferramentas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Ferramentas` (
  `idFerramenta` INT NOT NULL AUTO_INCREMENT,
  `nomeFerramenta` VARCHAR(45) NOT NULL,
  `versaoFerramenta` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idFerramenta`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Recursos_Ferramentas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Recursos_Ferramentas` (
  `idRecursoFerramenta` INT NOT NULL AUTO_INCREMENT,
  `Recurso_idRecurso` INT NOT NULL,
  `Ferramenta_idFerramenta` INT NOT NULL,
  PRIMARY KEY (`idRecursoFerramenta`),
  INDEX `fk_RecursoFerramentaProg_Recurso1_idx` (`Recurso_idRecurso` ASC) VISIBLE,
  INDEX `fk_RecursoFerramentaProg_FerramentaProg1_idx` (`Ferramenta_idFerramenta` ASC) VISIBLE,
  CONSTRAINT `fk_RecursoFerramentaProg_Recurso1`
    FOREIGN KEY (`Recurso_idRecurso`)
    REFERENCES `mydb`.`Recurso` (`idRecurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_RecursoFerramentaProg_FerramentaProg1`
    FOREIGN KEY (`Ferramenta_idFerramenta`)
    REFERENCES `mydb`.`Ferramentas` (`idFerramenta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Atividade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Atividade` (
  `idAtividade` INT NOT NULL AUTO_INCREMENT,
  `nomeAtividade` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idAtividade`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Tarefa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Tarefa` (
  `idTarefa` INT NOT NULL AUTO_INCREMENT,
  `descTarefa` VARCHAR(120) NOT NULL,
  `Atividade_idAtividade` INT NOT NULL,
  PRIMARY KEY (`idTarefa`),
  INDEX `fk_Tarefa_Atividade1_idx` (`Atividade_idAtividade` ASC) VISIBLE,
  CONSTRAINT `fk_Tarefa_Atividade1`
    FOREIGN KEY (`Atividade_idAtividade`)
    REFERENCES `mydb`.`Atividade` (`idAtividade`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`ProjetoAtividade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`ProjetoAtividade` (
  `idProjetoAtividade` INT NOT NULL AUTO_INCREMENT,
  `Atividade_idAtividade` INT NOT NULL,
  `Projeto_idProjeto` INT NOT NULL,
  PRIMARY KEY (`idProjetoAtividade`),
  INDEX `fk_ProjetoAtividade_Atividade1_idx` (`Atividade_idAtividade` ASC) VISIBLE,
  INDEX `fk_ProjetoAtividade_Projeto1_idx` (`Projeto_idProjeto` ASC) VISIBLE,
  CONSTRAINT `fk_ProjetoAtividade_Atividade1`
    FOREIGN KEY (`Atividade_idAtividade`)
    REFERENCES `mydb`.`Atividade` (`idAtividade`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ProjetoAtividade_Projeto1`
    FOREIGN KEY (`Projeto_idProjeto`)
    REFERENCES `mydb`.`Projeto` (`idProjeto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`HistoricoSalario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`HistoricoSalario` (
  `idHistoricoSalario` INT NOT NULL AUTO_INCREMENT,
  `salario` FLOAT NOT NULL,
  `dataAumento` DATE NOT NULL,
  `Recurso_idRecurso` INT NOT NULL,
  PRIMARY KEY (`idHistoricoSalario`),
  INDEX `fk_HistoricoSalario_Recurso1_idx` (`Recurso_idRecurso` ASC) VISIBLE,
  CONSTRAINT `fk_HistoricoSalario_Recurso1`
    FOREIGN KEY (`Recurso_idRecurso`)
    REFERENCES `mydb`.`Recurso` (`idRecurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
