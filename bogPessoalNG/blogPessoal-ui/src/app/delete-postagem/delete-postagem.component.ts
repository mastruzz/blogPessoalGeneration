import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-delete-postagem',
  templateUrl: './delete-postagem.component.html',
  styleUrls: ['./delete-postagem.component.css']
})
export class DeletePostagemComponent implements OnInit {

  postagem: Postagem = new Postagem()



  constructor(
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    let id: number = this.route.snapshot.params["id"]
    this.findByIdPostagem(id)
  }

  btnSim(){
    this.postagemService.deletePostagem(this.postagem.id).subscribe(()=>{
      this.router.navigate(["/feed"])
      alert("Postagem apagada com sucesso")
    })
    
  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem)=>{
      this.postagem=resp
    })
  }

  btnNao(){
    this.router.navigate(["/feed"])
  }
}
