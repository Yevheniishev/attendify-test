import React, { Component, createRef } from "react";
import { ReactSVG } from "react-svg";

import Button from "../Button/Button";

import smile from "../../assets/icons/smile.svg";
import close from "../../assets/icons/close.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";

import "./App.scss";

export default class App extends Component {
  ref = createRef();

  handleScroll = () => {
    const top = this.ref.current.offsetTop;
    window.scrollTo({ top: top - 15, behavior: "smooth" });
  };
  render() {
    return (
      <div className="preview">
        <h2 className="preview__title">Color and States:</h2>
        <div className="preview__row">
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="danger">Danger</Button>
        </div>

        <div className="preview__row">
          <Button color="primary" loading>
            Primary
          </Button>
          <Button color="secondary" loading>
            Secondary
          </Button>
          <Button color="danger" loading>
            Danger
          </Button>
        </div>

        <div className="preview__row">
          <Button color="disabled" loading>
            Primary
          </Button>
          <Button color="disabled" loading>
            Secondary
          </Button>
          <Button color="disabled" loading>
            Danger
          </Button>
        </div>

        <div className="preview__row">
          <Button color="disabled">Primary</Button>
          <Button color="disabled">Secondary</Button>
          <Button color="disabled">Danger</Button>
        </div>

        <h2 className="preview__title">Sizes</h2>
        <div className="preview__row">
          <Button color="primary" size="large">
            Primary
          </Button>
          <Button color="secondary" size="medium">
            Secondary
          </Button>
          <Button color="danger" size="small">
            Danger
          </Button>
        </div>

        <h2 className="preview__title">Icons</h2>
        <div className="preview__row">
          <Button color="primary" size="large">
            <ReactSVG className="preview__img" src={smile} />
            Primary
          </Button>
          <Button color="secondary" size="medium">
            <ReactSVG className="preview__img" src={whatsapp} />
            Secondary
          </Button>
          <Button color="danger" size="small">
            <ReactSVG className="preview__img" src={close} />
            Danger
          </Button>
        </div>

        <div className="preview__row">
          <Button color="primary" size="small">
            Primary
            <ReactSVG className="preview__img" src={smile} />
          </Button>
          <Button color="secondary" size="medium">
            Secondary
            <ReactSVG className="preview__img" src={whatsapp} />
          </Button>
          <Button color="danger" size="large">
            Danger
            <ReactSVG className="preview__img" src={close} />
          </Button>
        </div>

        <div className="preview__row">
          <Button color="primary">
            <ReactSVG className="preview__img" src={smile} />
          </Button>
          <Button color="secondary">
            <ReactSVG className="preview__img" src={whatsapp} />
          </Button>
          <Button color="danger">
            <ReactSVG className="preview__img" src={close} />
          </Button>
        </div>

        <h2 className="preview__title">Custom view:</h2>
        <div className="preview__row">
          <Button className="preview__btn" onClick={this.handleScroll}>
            Magic button
          </Button>
        </div>
        <p ref={this.ref}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          porro quod accusamus exercitationem inventore, saepe ullam eaque
          aspernatur mollitia, error minus in laborum, fugit fugiat. Quas ab
          dignissimos sint nesciunt quo ut rerum iste, aspernatur harum quisquam
          voluptas dolor et, sunt natus libero doloribus quis numquam cupiditate
          sed ipsum. Corrupti, eaque! Consectetur repellat odio nulla nemo
          commodi aliquid tempore amet doloribus distinctio, adipisci error
          ducimus labore dolor deleniti assumenda id ratione perspiciatis,
          exercitationem voluptatibus, necessitatibus atque laudantium dolores
          sequi! Earum alias temporibus mollitia! Sapiente est, voluptatem sequi
          similique atque repellendus? Voluptas repellendus, cumque quisquam
          doloremque perferendis reiciendis. Veritatis, fugit magnam.
        </p>
      </div>
    );
  }
}
