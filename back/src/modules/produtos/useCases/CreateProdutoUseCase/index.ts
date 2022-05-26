import { CreateProdutoController } from "./CreateProdutoController";
import { CreateProdutoUseCase } from "./CreateProdutoUseCase"; 
import { ProdutoRepository } from "../../../../repositories/ProdutoRepository";

const produtoRepository = new ProdutoRepository()
const createprodutoUseCase = new CreateProdutoUseCase(produtoRepository);
const createprodutoControler = new CreateProdutoController(createprodutoUseCase);

export { createprodutoUseCase, createprodutoControler };