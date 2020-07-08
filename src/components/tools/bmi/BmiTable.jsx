import React from 'react'

export default function BmiTable(props) {
    const { age } = props;

    let row1 = age > 18 && age <= 24 ? 'red' : 'black';
    let row2 = age > 24 && age <= 34 ? 'red' : 'black';
    let row3 = age > 35 && age <= 44 ? 'red' : 'black';
    let row4 = age > 43 && age <= 54 ? 'red' : 'black';
    let row5 = age > 53 && age <= 64 ? 'red' : 'black';
    let row6 = age > 65 ? 'red' : 'black';

    console.log(row1)

    return (
        <div>
            <div>
                <table border="1">
                    <tbody>
                        <tr>
                            <th>Starost</th>
                            <th>Smanjena telesna tezina</th>
                            <th>Normalna tezina</th>
                            <th>Gojaznost</th>
                            <th>Gojaznost (adipositas)</th>
                            <th>Jaka gojaznost</th>
                        </tr>
                        {/* </th> */}
                        <tr style={{ color: row1 }}>
                            <td>18-24</td>
                            <td>manje od 19</td>
                            <td>19-24</td>
                            <td>24-29</td>
                            <td>29-39</td>
                            <td>vise od 39</td>
                            <td></td>
                        </tr>
                        <tr style={{ color: row2 }}>
                            <td>25-34</td>
                            <td>manje od 20</td>
                            <td>20-25</td>
                            <td>25-30</td>
                            <td>30-40</td>
                            <td>vise od 40</td>
                        </tr>
                        <tr style={{ color: row3 }}>
                            <td>35-44</td>
                            <td>manje od 21</td>
                            <td>21-26</td>
                            <td>26-31</td>
                            <td>31-41</td>
                            <td>vise od 41</td>
                        </tr>
                        <tr style={{ color: row4 }}>
                            <td>45-54</td>
                            <td>manje od 22</td>
                            <td>22-27</td>
                            <td>27-32</td>
                            <td>32-42</td>
                            <td>vise od 42</td>
                        </tr>
                        <tr style={{ color: row5 }}>
                            <td>55-64</td>
                            <td>manje od 23</td>
                            <td>23-28</td>
                            <td>28-33</td>
                            <td>33-43</td>
                            <td>vise od 43</td>
                        </tr>
                        <tr style={{ color: row6 }}>
                            <td>65+</td>
                            <td>manje 24</td>
                            <td>24-29</td>
                            <td>29-34</td>
                            <td>34-44</td>
                            <td>vise od 44</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div>

            </div>
        </div>
    )
}
