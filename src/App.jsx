import { useState } from "react";

function App() {
  const [penilaian, setPenilaian] = useState({
    aspek_penilaian_1: {},
    aspek_penilaian_2: {},
    aspek_penilaian_3: {},
    aspek_penilaian_4: {},
  });

  const [showJson, setShowJson] = useState(false);

  const handleInput = (event, aspek, mahasiswa) => {
    const value = parseInt(event.target.value);
    setPenilaian((prevState) => ({
      ...prevState,
      [aspek]: {
        ...prevState[aspek],
        [mahasiswa]: value,
      },
    }));
    setShowJson(false);
  };

  const handleSimpan = () => {
    console.log(penilaian);
    setShowJson(true);
  };

  return (
    <div className="App">
      <h1>Aplikasi Penilaian Mahasiswa</h1>
      <table>
        <thead>
          <tr>
            <th>Mahasiswa</th>
            <th>Aspek Penilaian 1</th>
            <th>Aspek Penilaian 2</th>
            <th>Aspek Penilaian 3</th>
            <th>Aspek Penilaian 4</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, i) => (
            <tr key={`mahasiswa_${i + 1}`}>
              <td>Mahasiswa {i + 1}</td>
              {[...Array(4)].map((_, j) => (
                <td key={`aspek_penilaian_${j + 1}`}>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={
                      penilaian[`aspek_penilaian_${j + 1}`][
                        `mahasiswa_${i + 1}`
                      ] || ""
                    }
                    onChange={(event) =>
                      handleInput(
                        event,
                        `aspek_penilaian_${j + 1}`,
                        `mahasiswa_${i + 1}`
                      )
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSimpan}>Simpan</button>
      {showJson && (
        <>
          <h2>Hasil</h2>

          {JSON.stringify(penilaian)}
        </>
      )}
    </div>
  );
}

export default App;
