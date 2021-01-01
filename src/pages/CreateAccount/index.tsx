import React, { FormEvent, useCallback, useState } from 'react';
import { MdPerson } from 'react-icons/md';
import Input from '../../components/Input';
import { useToast } from '../../hooks/toast';

import api from '../../services/api';

import { Container, SubmitButton } from './styles';

const CreateAccount: React.FC = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      setLoading(true);

      try {
        await api.post('accounts', { name });

        addToast({
          type: 'success',
          description:
            "Account created with success! Click here to redirect to account's page",
          redirect_route: `/${name}`,
        });
      } catch (error) {
        addToast({
          type: 'error',
          description: 'An account with this name already exists.',
        });
      } finally {
        setLoading(false);
      }
    },
    [name, addToast],
  );

  return (
    <Container>
      <h1>Create Accounts</h1>

      <form onSubmit={handleSubmit}>
        <Input
          icon={MdPerson}
          value={name}
          placeholder="Account name"
          onChange={e => setName(e.target.value)}
        />

        <SubmitButton type="submit" disabled={loading}>
          Create
        </SubmitButton>
      </form>
    </Container>
  );
};

export default CreateAccount;
