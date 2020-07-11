import React from 'react'

export default function BmiTable(props) {
    const { age } = props;

    let row1 = age >= 18 && age <= 24 ? '#d1ecf1' : 'white';
    let row2 = age >= 25 && age <= 34 ? '#d1ecf1' : 'white';
    let row3 = age >= 35 && age <= 44 ? '#d1ecf1' : 'white';
    let row4 = age >= 45 && age <= 54 ? '#d1ecf1' : 'white';
    let row5 = age >= 55 && age <= 64 ? '#d1ecf1' : 'white';
    let row6 = age >= 65 ? '#d1ecf1' : 'white';

    // console.log(row1)

    return (
        <div>
            <div>
                <table style={{ marginTop: '100px' }} className='table'>
                    <tbody>
                        <tr>
                            <th scope='col'>Starost</th>
                            <th scope='col' >Smanjena telesna tezina</th>
                            <th scope='col'>Normalna tezina</th>
                            <th scope='col'>Gojaznost</th>
                            <th scope='col'>Gojaznost (adipositas)</th>
                            <th scope='col'>Jaka gojaznost</th>
                        </tr>
                        {/* </th> */}
                        <tr style={{ backgroundColor: row1 }}>
                            <td>18-24</td>
                            <td>manje od 19</td>
                            <td>19-24</td>
                            <td>24-29</td>
                            <td>29-39</td>
                            <td>vise od 39</td>
                            <td></td>
                        </tr>
                        <tr style={{ backgroundColor: row2 }}>
                            <td>25-34</td>
                            <td>manje od 20</td>
                            <td>20-25</td>
                            <td>25-30</td>
                            <td>30-40</td>
                            <td>vise od 40</td>
                        </tr>
                        <tr style={{ backgroundColor: row3 }}>
                            <td>35-44</td>
                            <td>manje od 21</td>
                            <td>21-26</td>
                            <td>26-31</td>
                            <td>31-41</td>
                            <td>vise od 41</td>
                        </tr>
                        <tr style={{ backgroundColor: row4 }}>
                            <td>45-54</td>
                            <td>manje od 22</td>
                            <td>22-27</td>
                            <td>27-32</td>
                            <td>32-42</td>
                            <td>vise od 42</td>
                        </tr>
                        <tr style={{ backgroundColor: row5 }}>
                            <td>55-64</td>
                            <td>manje od 23</td>
                            <td>23-28</td>
                            <td>28-33</td>
                            <td>33-43</td>
                            <td>vise od 43</td>
                        </tr>
                        <tr style={{ backgroundColor: row6 }}>
                            <td>65+</td>
                            <td>manje od 24</td>
                            <td>24-29</td>
                            <td>29-34</td>
                            <td>34-44</td>
                            <td>vise od 44</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
