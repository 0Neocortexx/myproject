#importação
from config import *
import bcrypt

class Pessoa(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(254))
    senha = db.Column(db.Column(254))

    def __str__(self) -> str:
        return f"ID: {self.id}, Nome: {self.email}, Senha: {self.senha}"
    
    def json(self):
        return {
            'email' :self.email,
            'senha' :self.senha
        }
    
    def criptPass(self):
        self.senha = self.senha.encode('utf-8')
        self.senha = bcrypt.hashpw(self.senha,bcrypt.gensalt())
        
if __name__ == '__main__':
    db.create_all()
    