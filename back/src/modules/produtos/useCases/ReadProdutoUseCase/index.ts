import { ReadProdutoController } from "./ReadProdutoController";
import { ReadProdutoUseCase } from "./ReadProdutoUseCase"; 
import { ProdutoRepository } from "../../../../repositories/ProdutoRepository";

const produtoRepository = new ProdutoRepository()
const readprodutoUseCase = new ReadProdutoUseCase(produtoRepository);
const readprodutoControler = new ReadProdutoController(readprodutoUseCase);

export { readprodutoUseCase, readprodutoControler };