export default function AddMovieForm() {
    return (
        <fieldset>
            <input className="form-group" placeholder="Titel här..."></input>
            <select className="form-group">
                <option value="" selected>Välj betyg här</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </fieldset>
    )
};