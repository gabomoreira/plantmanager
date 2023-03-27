import {render} from '@testing-library/react-native'
import { UserIdentification } from '../screens/UserIdentification'
import AsynStorage from '@react-native-async-storage/async-storage'
import { useRoute } from '@react-navigation/native'
jest.mock("@react-navigation/core");

const mockUseRoute = () => {
    return useRoute.mockReturnValue({
        name: "UserIdentification"
      });
}

describe('UserIdentification screen', () => {
    it('should render placeholder correctly', async () => {
        mockUseRoute()

        const {getByPlaceholderText} = render(<UserIdentification />)

        const inputName = getByPlaceholderText('Digite seu nome')

        expect(inputName).toBeTruthy()
    })
    
    it('should render button disable when state name is smaller 3 length', async () => {
        mockUseRoute()

        const stateName = create

        const {getByPlaceholderText} = render(<UserIdentification />)

        const inputName = getByPlaceholderText('Digite seu nome')

        expect(inputName).toBeTruthy()
    })


})