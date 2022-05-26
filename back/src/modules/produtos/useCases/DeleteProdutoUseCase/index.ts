import { DeleteProdutoController } from "./DeleteProdutoController";
import { DeleteProdutoUseCase } from "./DeleteProdutoUseCase"; 
import { ProdutoRepository } from "../../../../repositories/ProdutoRepository";

const produtoRepository = new ProdutoRepository()
const deleteprodutoUseCase = new DeleteProdutoUseCase(produtoRepository);
const deleteprodutoControler = new DeleteProdutoController(deleteprodutoUseCase);

export { deleteprodutoUseCase, deleteprodutoControler };