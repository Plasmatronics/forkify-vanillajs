import View from './view.js'
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js'



class ResultsView extends View{
    _parentElement=document.querySelector('.results');
    _errorMessage = `No recipes found! Try again!`;
    _message=`Hi!`
    
    _generateMarkup(){
        return this._data.map(result => previewView.render(result, false)).join('')
      };
  }
  

export default new ResultsView();
