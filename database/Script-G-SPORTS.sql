-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema G-SPORTS
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema G-SPORTS
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `G-SPORTS` DEFAULT CHARACTER SET utf8 ;
USE `G-SPORTS` ;

-- -----------------------------------------------------
-- Table `G-SPORTS`.`Proveedores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `G-SPORTS`.`Proveedores` (
  `idProveedores` CHAR(10) NOT NULL,
  `NombreCompañia` VARCHAR(45) NULL,
  `NombreContacto` VARCHAR(45) NULL,
  `Ciudad` VARCHAR(45) NULL,
  `CodPostal` VARCHAR(45) NULL,
  `Teléfono` VARCHAR(45) NULL,
  PRIMARY KEY (`idProveedores`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `G-SPORTS`.`Categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `G-SPORTS`.`Categorias` (
  `idCategorias` CHAR(10) NOT NULL,
  `NombreCategoria` VARCHAR(45) NULL,
  PRIMARY KEY (`idCategorias`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `G-SPORTS`.`Productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `G-SPORTS`.`Productos` (
  `idProducto` CHAR(10) NOT NULL,
  `idProveedores` CHAR(10) NOT NULL,
  `idCategorias` CHAR(10) NOT NULL,
  `NombreProducto` VARCHAR(20) NULL,
  `PrecioUnidad` DOUBLE NULL,
  `UnidadesExistentes` VARCHAR(45) NULL,
  PRIMARY KEY (`idProducto`, `idProveedores`, `idCategorias`),
  INDEX `fk_Productos_1_idx` (`idProveedores` ASC) VISIBLE,
  INDEX `fk_Productos_2_idx` (`idCategorias` ASC) VISIBLE,
  CONSTRAINT `fk_Productos_1`
    FOREIGN KEY (`idProveedores`)
    REFERENCES `G-SPORTS`.`Proveedores` (`idProveedores`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Productos_2`
    FOREIGN KEY (`idCategorias`)
    REFERENCES `G-SPORTS`.`Categorias` (`idCategorias`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `G-SPORTS`.`Clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `G-SPORTS`.`Clientes` (
  `idCliente` CHAR(10) NOT NULL,
  `NombreContacto` VARCHAR(45) NULL,
  `Ciudad` VARCHAR(45) NULL,
  `CodPostal` VARCHAR(45) NULL,
  `Teléfono` VARCHAR(45) NULL,
  `Alcaldía` VARCHAR(45) NULL,
  `Correo` VARCHAR(45) NULL,
  PRIMARY KEY (`idCliente`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mydb`.`Pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `G-SPORTS`.`Pedidos` (
  `idPedidos` INT NOT NULL,
  `idCliente` CHAR(10) NOT NULL,
  `FechaPedido` VARCHAR(45) NULL,
  `FechaEnvio` VARCHAR(45) NULL,
  `FechaEntrega` VARCHAR(45) NULL,
  PRIMARY KEY (`idPedidos`, `idCliente`),
  INDEX `fk_Pedidos_1_idx` (`idCliente` ASC) VISIBLE,
  CONSTRAINT `fk_Pedidos_1`
    FOREIGN KEY (`idCliente`)
    REFERENCES `G-SPORTS`.`Clientes` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `G-SPORTS`.`DetallesPedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `G-SPORTS`.`DetallesPedidos` (
  `idPedidos` INT NOT NULL,
  `idProducto` CHAR(10) NOT NULL,
  `Cantidad` VARCHAR(45) NULL,
  `Descuento` VARCHAR(45) NULL,
  PRIMARY KEY (`idPedidos`, `idProducto`),
  INDEX `fk_DetallesPedidos_2_idx` (`idProducto` ASC) VISIBLE,
  CONSTRAINT `fk_DetallesPedidos_1`
    FOREIGN KEY (`idPedidos`)
    REFERENCES `G-SPORTS`.`Pedidos` (`idPedidos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_DetallesPedidos_2`
    FOREIGN KEY (`idProducto`)
    REFERENCES `G-SPORTS`.`Productos` (`idProducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
